"use client";

import { useEffect, useRef, useState } from "react";
import { COPILOT_PROMPTS, type CopilotPrompt } from "@/lib/data";
import { CloseIcon, SparklesIcon } from "./icons";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const MSG_LIMIT = 3;

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CopilotPanel({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [used, setUsed] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const nextId = () => {
    idRef.current += 1;
    return idRef.current;
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (!open) return null;

  const left = Math.max(0, MSG_LIMIT - used);

  const ask = (prompt: CopilotPrompt) => {
    if (used >= MSG_LIMIT) return;
    const userMsg: Message = {
      id: nextId(),
      role: "user",
      text: prompt.question,
    };
    const assistantMsg: Message = {
      id: nextId(),
      role: "assistant",
      text: prompt.answer,
    };
    setMessages((m) => [...m, userMsg, assistantMsg]);
    setUsed((u) => u + 1);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || used >= MSG_LIMIT) return;
    const match = COPILOT_PROMPTS.find((p) =>
      p.question.toLowerCase().includes(q.toLowerCase()),
    );
    const fallback =
      "I'm a static AI Copilot trained on Manish's portfolio data. Try one of the suggested prompts, or peek at the open files for the full story.";
    const userMsg: Message = { id: nextId(), role: "user", text: q };
    const assistantMsg: Message = {
      id: nextId(),
      role: "assistant",
      text: match ? match.answer : fallback,
    };
    setMessages((m) => [...m, userMsg, assistantMsg]);
    setUsed((u) => u + 1);
    setInput("");
  };

  return (
    <div
      data-grid="copilot"
      className="border-l flex flex-col overflow-hidden panel-fade-in min-w-0"
      style={{
        gridArea: "copilot",
        background: "var(--bg2)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 border-b text-xs"
        style={{ borderColor: "var(--border)" }}
      >
        <SparklesIcon className="w-4 h-4" style={{ color: "var(--purple)" }} />
        <span style={{ color: "var(--bright)" }}>Manish&apos;s AI Assistant</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto p-1 rounded cursor-pointer"
          style={{ color: "var(--dim)" }}
          title="Close"
          aria-label="Close Copilot"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>

      <div
        className="px-3 py-2 text-[10px] flex items-center gap-2 border-b"
        style={{ borderColor: "var(--border)", color: "var(--dim)" }}
      >
        <span className="uppercase tracking-[0.12em] font-bold">Workspace</span>
        <span style={{ color: "var(--purple)" }}>● portfolio · manish-lakhiwal</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll px-3 py-3">
        {messages.length === 0 ? (
          <Greeting onPick={ask} />
        ) : (
          <div className="flex flex-col gap-3">
            {messages.map((m) =>
              m.role === "user" ? (
                <UserBubble key={m.id} text={m.text} />
              ) : (
                <AssistantBubble key={m.id} text={m.text} />
              ),
            )}

            <div
              className="text-[10px] text-center mt-2"
              style={{ color: "var(--yellow)" }}
            >
              ⚡ {left} message{left === 1 ? "" : "s"} left,{" "}
              <a
                href="https://github.com/Lakhiwal"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--yellow)" }}
              >
                support Manish!
              </a>
            </div>

            {left > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {COPILOT_PROMPTS.slice(0, 4).map((p) => (
                  <button
                    key={p.question}
                    type="button"
                    onClick={() => ask(p)}
                    className="text-[10px] px-2 py-1 rounded-full border cursor-pointer truncate max-w-[180px]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                    title={p.question}
                  >
                    * {p.question.replace(/\?$/, "")}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="border-t px-3 py-2 flex flex-col gap-1.5"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="flex items-end gap-2 rounded px-2 py-1.5"
          style={{
            background: "var(--bg3)",
            border: "1px solid var(--border)",
          }}
        >
          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e);
              }
            }}
            placeholder="Ask about Manish's projects, experience, ..."
            className="flex-1 bg-transparent outline-none text-xs resize-none"
            style={{ color: "var(--text)" }}
            disabled={left === 0}
          />
          <button
            type="submit"
            disabled={!input.trim() || left === 0}
            className="w-7 h-7 flex items-center justify-center rounded cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: "var(--purple)",
              color: "white",
            }}
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="m13 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div
          className="flex items-center text-[10px]"
          style={{ color: "var(--dim)" }}
        >
          <span>{left} msgs left</span>
        </div>
        <div className="text-[10px]" style={{ color: "var(--dim)" }}>
          AI can make mistakes · Contact Manish directly for important info
        </div>
      </form>
    </div>
  );
}

function Greeting({ onPick }: { onPick: (p: CopilotPrompt) => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 mt-6">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--pink), var(--purple))",
          boxShadow: "0 0 24px rgba(255,111,216,0.4)",
        }}
      >
        🤖
      </div>
      <div className="text-sm" style={{ color: "var(--bright)" }}>
        Hi! I&apos;m Manish&apos;s Copilot 👋
      </div>
      <div className="text-[11px] px-2" style={{ color: "var(--dim)" }}>
        Ask me anything about his projects, skills, experience, or achievements.
      </div>
      <div className="grid grid-cols-2 gap-1.5 w-full mt-2">
        {COPILOT_PROMPTS.map((p) => (
          <button
            key={p.question}
            type="button"
            onClick={() => onPick(p)}
            className="text-[11px] px-2 py-2 rounded border text-left cursor-pointer"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.02)",
              color: "var(--text)",
            }}
          >
            * {p.question}
          </button>
        ))}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 justify-end">
      <div
        className="max-w-[85%] px-2.5 py-1.5 rounded-lg text-xs"
        style={{
          background: "rgba(110,64,201,0.18)",
          border: "1px solid rgba(110,64,201,0.4)",
          color: "var(--bright)",
        }}
      >
        {text}
      </div>
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0"
        style={{ background: "var(--blue2)", color: "white" }}
      >
        👤
      </div>
    </div>
  );
}

function AssistantBubble({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--pink), var(--purple))",
        }}
      >
        🤖
      </div>
      <div className="flex flex-col gap-1 max-w-[85%]">
        <span className="text-[10px]" style={{ color: "var(--dim)" }}>
          Manish&apos;s Copilot
        </span>
        <div
          className="px-2.5 py-1.5 rounded-lg text-xs whitespace-pre-line"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
