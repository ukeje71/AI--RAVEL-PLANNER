import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ChevronLeftIcon,
  MessageSquareText,
  Trash2,
} from "lucide-react";
import ChatForm from "../../components/ChatForm";
import ChatMessage from "../../components/ChatMessage";

const SUGGESTIONS = [
  "Best places to visit in Ghana",
  "Budget trip to Kenya",
  "Safari tips",
  "Hidden gems in Nigeria",
];

const Aibot = () => {
  const [chatHistory, setChatHistory] = useState(() => {
    try {
      const savedChats = localStorage.getItem("chatHistory");
      const parsed = savedChats ? JSON.parse(savedChats) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [currentDate, setCurrentDate] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [viewportStyle, setViewportStyle] = useState({});
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);
  const formRef = useRef(null);
  const nearBottomRef = useRef(true);
  const forceScrollRef = useRef(false);

  const isLoading = chatHistory.some((message) => message.pending);
  const isEmpty = chatHistory.length === 0;

  const dateLabel = useMemo(
    () =>
      currentDate ||
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [currentDate]
  );

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    } catch (error) {
      console.warn("Could not save chat history:", error);
    }
  }, [chatHistory]);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return undefined;

    const updateViewport = () => {
      setViewportStyle({
        height: `${viewport.height}px`,
        top: `${viewport.offsetTop}px`,
      });
    };

    updateViewport();
    viewport.addEventListener("resize", updateViewport);
    viewport.addEventListener("scroll", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      viewport.removeEventListener("resize", updateViewport);
      viewport.removeEventListener("scroll", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  useEffect(() => {
    const shouldScroll = forceScrollRef.current || nearBottomRef.current;
    forceScrollRef.current = false;

    if (shouldScroll) {
      requestAnimationFrame(() => {
        messagesEndRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      });
    }
  }, [chatHistory]);

  const handleMessagesScroll = useCallback(() => {
    const element = messagesRef.current;
    if (!element) return;

    const distanceFromBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight;
    nearBottomRef.current = distanceFromBottom < 120;
    setShowScrollButton(distanceFromBottom >= 120);
  }, []);

  const scrollToBottom = useCallback(() => {
    nearBottomRef.current = true;
    setShowScrollButton(false);
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  const handleFocus = useCallback(() => {
    nearBottomRef.current = true;
    window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 250);
  }, []);

  const sendPrompt = useCallback((prompt) => {
    const textarea = formRef.current?.querySelector("textarea");
    if (!textarea) return;

    textarea.value = prompt;
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
    formRef.current?.requestSubmit();
  }, []);

  const retryMessage = useCallback((prompt) => {
    const textarea = formRef.current?.querySelector("textarea");
    if (!textarea || isLoading) return;

    textarea.value = prompt;
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
    formRef.current?.requestSubmit();
  }, [isLoading]);

  const clearChat = useCallback(() => {
    if (chatHistory.length === 0) return;
    if (!window.confirm("Clear your chat history? This cannot be undone.")) return;

    setChatHistory([]);
    nearBottomRef.current = true;
    setShowScrollButton(false);
  }, [chatHistory.length]);

  return (
    <main className="chat-app" style={viewportStyle}>
      <section className="chat-shell" aria-label="Deep Vein travel chat">
        <header className="chat-header">
          <div className="chat-header__identity">
            <button
              className="icon-button back-button"
              type="button"
              aria-label="Go back"
              onClick={() => window.history.back()}
            >
              <ChevronLeftIcon size={22} />
            </button>
            <div className="chat-brand-mark" aria-hidden="true">
              <MessageSquareText size={19} />
            </div>
            <div className="chat-header__titles">
              <h1>Chat Ai</h1>
              <span>Africa Travel Expert</span>
            </div>
          </div>

          <button
            className="icon-button clear-button"
            type="button"
            aria-label="Clear chat"
            title="Clear chat"
            onClick={clearChat}
            disabled={chatHistory.length === 0 || isLoading}
          >
            <Trash2 size={18} />
          </button>
        </header>

        <div className="chat-date" aria-label={`Today, ${dateLabel}`}>
          {dateLabel}
        </div>

        <div
          className="chat-body"
          ref={messagesRef}
          onScroll={handleMessagesScroll}
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
        >
          <div className="chat-body__content">
            <div className="welcome-message">
              <div className="welcome-message__avatar" aria-hidden="true">
                <MessageSquareText size={19} />
              </div>
              <div className="welcome-message__content">
                <p className="welcome-message__eyebrow">Your Africa travel guide</p>
                <h2>Hey there, let’s plan somewhere unforgettable.</h2>
                <p>
                  Ask me about destinations, local experiences, budgets, or
                  practical travel tips across Africa.
                </p>
              </div>
            </div>

            {isEmpty && (
              <div className="suggestion-list" aria-label="Suggested questions">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    className="suggestion-chip"
                    type="button"
                    key={suggestion}
                    onClick={() => sendPrompt(suggestion)}
                    disabled={isLoading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {chatHistory.map((chat, index) => (
              <ChatMessage
                key={chat.id || `${chat.role}-${index}`}
                chat={chat}
                onRetry={retryMessage}
              />
            ))}

            <div ref={messagesEndRef} className="messages-end" />
          </div>
        </div>

        {showScrollButton && (
          <button
            type="button"
            className="scroll-bottom-button"
            onClick={scrollToBottom}
            aria-label="Scroll to the latest message"
          >
            <ArrowDown size={17} />
            <span>Latest</span>
          </button>
        )}

        <div className="chat-footer">
          <ChatForm
            setChatHistory={setChatHistory}
            formRef={formRef}
            onFocus={handleFocus}
            onSending={() => {
              nearBottomRef.current = true;
              forceScrollRef.current = true;
            }}
            isLoading={isLoading}
          />
        </div>
      </section>
    </main>
  );
};

export default Aibot;
