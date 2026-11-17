import { memo, useMemo, useState } from "react";
import { Check, Copy, MessageSquareText, RotateCcw } from "lucide-react";
import UserAvatar from "../assets/Samuel.jpg";

const renderInlineFormatting = (text, keyPrefix) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${keyPrefix}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const FormattedText = ({ text }) => {
  const lines = useMemo(() => String(text || "").split(/\r?\n/), [text]);

  return (
    <div className="formatted-message">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        const bulletMatch = trimmedLine.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/);

        if (!trimmedLine) {
          return <div className="formatted-spacer" key={`line-${index}`} />;
        }

        if (bulletMatch) {
          return (
            <div className="formatted-list-item" key={`line-${index}`}>
              <span className="formatted-bullet" aria-hidden="true" />
              <span>{renderInlineFormatting(bulletMatch[1], `bullet-${index}`)}</span>
            </div>
          );
        }

        return (
          <p key={`line-${index}`}>
            {renderInlineFormatting(line, `text-${index}`)}
          </p>
        );
      })}
    </div>
  );
};

const ChatMessage = memo(({ chat, onRetry }) => {
  const isBot = chat.role === "assistant";
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(chat.text || "");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  if (chat.pending) {
    return (
      <div className="message-row message-row--assistant">
        <div className="message-avatar" aria-hidden="true">
          <MessageSquareText size={17} />
        </div>
        <div
          className="message-bubble assistant-bubble typing-bubble"
          role="status"
          aria-label="Travel guide is typing"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (!isBot) {
    return (
      <div className="message-row message-row--user">
        <div className="message-bubble user-bubble">
          <FormattedText text={chat.text} />
        </div>
        <img
          src={UserAvatar}
          alt=""
          className="user-avatar"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="message-row message-row--assistant">
      <div className="message-avatar" aria-hidden="true">
        <MessageSquareText size={17} />
      </div>
      <div className="assistant-message-wrap">
        <div className={`message-bubble assistant-bubble${chat.error ? " error-bubble" : ""}`}>
          <FormattedText text={chat.text} />
          {chat.error && chat.retryPrompt && (
            <button
              type="button"
              className="retry-button"
              onClick={() => onRetry?.(chat.retryPrompt)}
            >
              <RotateCcw size={15} />
              <span>Retry</span>
            </button>
          )}
        </div>
        {!chat.error && chat.text && (
          <button
            type="button"
            className="copy-button"
            onClick={copyMessage}
            aria-label={copied ? "Copied reply" : "Copy reply"}
            title={copied ? "Copied" : "Copy reply"}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        )}
      </div>
    </div>
  );
});

ChatMessage.displayName = "ChatMessage";

export default ChatMessage;
