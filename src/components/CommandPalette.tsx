"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FILES } from "@/lib/data";
import { FILE_ICON_MAP, SparklesIcon } from "./icons";

const ICONS = FILE_ICON_MAP();

type Item =
  | { kind: "command"; id: string; label: string; shortcut?: string }
  | { kind: "file"; id: string; name: string; folder: string };

type Props = {
  onClose: () => void;
  onOpenFile: (id: string) => void;
  onOpenCopilot: () => void;
};

export function CommandPalette({ onClose, onOpenFile, onOpenCopilot }: Props) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(t);
  }, []);

  const items = useMemo<Item[]>(() => {
    const q = query.trim().toLowerCase();
    const commands: Item[] = [
      {
        kind: "command",
        id: "open-copilot",
        label: "Open Manish's Copilot",
        shortcut: "Ctrl+Shift+C",
      },
    ];
    const fileItems: Item[] = FILES.map((f) => ({
      kind: "file" as const,
      id: f.id,
      name: f.name,
      folder: f.folder,
    }));
    const all = [...commands, ...fileItems];
    if (!q) return all;
    return all.filter((it) => {
      if (it.kind === "command") return it.label.toLowerCase().includes(q);
      return it.name.toLowerCase().includes(q) || it.folder.toLowerCase().includes(q);
    });
  }, [query]);

  const onQueryChange = (v: string) => {
    setQuery(v);
    setCursor(0);
  };

  const select = (it: Item) => {
    if (it.kind === "command" && it.id === "open-copilot") {
      onOpenCopilot();
    } else if (it.kind === "file") {
      onOpenFile(it.id);
    }
    onClose();
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(items.length - 1, c + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(0, c - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const it = items[cursor];
      if (it) select(it);
    }
  };

  const commandItems = items.filter((i) => i.kind === "command");
  const fileItemsList = items.filter((i) => i.kind === "file");

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] overlay-fade-in"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="palette-pop w-[560px] max-w-[92vw] rounded-md overflow-hidden shadow-2xl"
        style={{
          background: "var(--bg3)",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center gap-2 px-3 py-2 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span style={{ color: "var(--dim)" }}>›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={onKey}
            placeholder="Go to file or run command..."
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "var(--bright)" }}
          />
          <button
            type="button"
            onClick={onClose}
            className="text-[10px] px-1.5 py-0.5 rounded border cursor-pointer"
            style={{ borderColor: "var(--border)", color: "var(--dim)" }}
          >
            Esc
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto thin-scroll py-1">
          {commandItems.length > 0 && (
            <div
              className="px-3 pt-2 pb-1 text-[10px] font-bold tracking-[0.12em] uppercase"
              style={{ color: "var(--dim)" }}
            >
              Commands
            </div>
          )}
          {commandItems.map((it) => {
            const idx = items.indexOf(it);
            const active = cursor === idx;
            return (
              <button
                key={it.kind + ":" + it.id}
                type="button"
                onClick={() => select(it)}
                onMouseEnter={() => setCursor(idx)}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer"
                style={{
                  background: active ? "rgba(110,64,201,0.18)" : "transparent",
                  color: active ? "var(--bright)" : "var(--text)",
                }}
              >
                <SparklesIcon className="w-4 h-4" style={{ color: "var(--purple)" }} />
                <span className="flex-1 text-left">{(it as Extract<Item, { kind: "command" }>).label}</span>
                {(it as Extract<Item, { kind: "command" }>).shortcut && (
                  <span
                    className="text-[10px] px-1.5 py-px rounded"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--dim)",
                    }}
                  >
                    {(it as Extract<Item, { kind: "command" }>).shortcut}
                  </span>
                )}
              </button>
            );
          })}

          {fileItemsList.length > 0 && (
            <div
              className="px-3 pt-2 pb-1 text-[10px] font-bold tracking-[0.12em] uppercase"
              style={{ color: "var(--dim)" }}
            >
              Files
            </div>
          )}
          {fileItemsList.map((it) => {
            const file = it as Extract<Item, { kind: "file" }>;
            const Icon = ICONS[file.id as keyof typeof ICONS];
            const idx = items.indexOf(it);
            const active = cursor === idx;
            return (
              <button
                key={it.kind + ":" + file.id}
                type="button"
                onClick={() => select(it)}
                onMouseEnter={() => setCursor(idx)}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer"
                style={{
                  background: active ? "rgba(255,255,255,0.07)" : "transparent",
                  color: active ? "var(--bright)" : "var(--text)",
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1 text-left">{file.name}</span>
                <span className="text-[10px]" style={{ color: "var(--dim)" }}>
                  {file.folder}/
                </span>
              </button>
            );
          })}

          {items.length === 0 && (
            <div className="px-3 py-6 text-xs text-center" style={{ color: "var(--dim)" }}>
              No matches
            </div>
          )}
        </div>

        <div
          className="px-3 py-1.5 border-t flex items-center gap-3 text-[10px]"
          style={{ borderColor: "var(--border)", color: "var(--dim)" }}
        >
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>Esc close</span>
          <span className="ml-auto">
            Tip: type &quot;copilot&quot; to open AI chat
          </span>
        </div>
      </div>
    </div>
  );
}
