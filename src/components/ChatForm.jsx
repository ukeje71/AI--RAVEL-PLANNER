import {
  AudioLines,
  ChevronUpIcon,
  LoaderCircle,
  Mic,
  SlidersHorizontal,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

const SYSTEM_PROMPT =
  "You are an Africa Travel Expert Consultant that recommends tourist spots, activities, and budget-friendly options. Follow these rules:. Destinations: Suggest top/hidden-gem landmarks, cultural sites, and natural wonders with brief descriptions (best time to visit, significance). Budget: Adapt to 'cheap', 'luxury', or specific budgets (e.g., hostels vs. resorts, free vs. premium activities). Activities/Food: Recommend hikes, tours, festivals, and must-try local dishes. Tips: Include safety, visas, weather, and nearby attractions. Format: Use bullet points/short paragraphs. Ask follow-ups if needed. Example: Destination: Cape Town, SA\n- Why Visit? Table Mountain, vineyards, penguin beaches. Budget: - 💸 Low: Free hiking, township tours (~$10).  - 💎 Luxury: Safari lodges ($500+/night), private wine tastings. Activities: Robben Island tour, seafood at V&A Waterfront. Best Time: Nov–Feb (summer).";

const ChatForm = ({
  setChatHistory,
  formRef,
  onFocus,
  onSending,
  isLoading,
}) => {
  const inputRef = useRef(null);
  const [hasText, setHasText] = useState(false);
  const [sending, setSending] = useState(false);
  const isBusy = Boolean(isLoading || sending);

  const resizeTextarea = useCallback(() => {
    const textarea = inputRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const lineHeight = Number.parseFloat(
      window.getComputedStyle(textarea).lineHeight
    ) || 22;
    const maxHeight = lineHeight * 4 + 2;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    setHasText(Boolean(textarea.value.trim()));
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isBusy) return;

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    onSending?.();
    setSending(true);
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "assistant", text: "", pending: true },
    ]);

    inputRef.current.value = "";
    resizeTextarea();

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
            "HTTP-Referer": "https://ai-travel-planner-psi-two.vercel.app/",
            "X-Title": "Deep Vein",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "nvidia/nemotron-3-ultra-550b-a55b:free",
            messages: [
              {
                role: "system",
                content: SYSTEM_PROMPT,
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error?.message || "The request could not be completed.");
      }

      const assistantReply = data?.choices?.[0]?.message?.content;
      if (!assistantReply) {
        throw new Error("The travel guide returned an empty reply.");
      }

      setChatHistory((history) => {
        const updated = history.filter((message) => !message.pending);
        return [
          ...updated,
          { role: "assistant", text: assistantReply },
        ];
      });
    } catch (error) {
      console.error("API Error:", error);
      setChatHistory((history) => {
        const updated = history.filter((message) => !message.pending);
        return [
          ...updated,
          {
            role: "assistant",
            text: "I couldn’t get a response just now. Please try again.",
            error: true,
            retryPrompt: userMessage,
          },
        ];
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="chat-form"
      onSubmit={handleFormSubmit}
    >
      <div className="chat-form__composer">
        <textarea
          ref={inputRef}
          placeholder="Ask anything about Africa..."
          className="message-input"
          aria-label="Message"
          rows={1}
          maxLength={4000}
          onInput={resizeTextarea}
          onFocus={onFocus}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          disabled={isBusy}
        />
        <button
          type="submit"
          className="send-button"
          aria-label={isBusy ? "Waiting for a reply" : "Send message"}
          disabled={isBusy || !hasText}
        >
          {isBusy ? (
            <LoaderCircle size={21} className="send-spinner" aria-hidden="true" />
          ) : (
            <ChevronUpIcon size={23} aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="chat-form__tools" aria-hidden="true">
        <span className="chat-tools-label">
          <SlidersHorizontal size={16} />
          <span>Tools</span>
          <span className="chat-tools-plus">+</span>
        </span>
        <span className="chat-tools-icons">
          <Mic size={17} />
          <AudioLines size={17} />
        </span>
      </div>
    </form>
  );
};

export default ChatForm;
