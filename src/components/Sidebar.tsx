"use client";

import { FILES } from "@/lib/data";
import {
  FILE_ICON_MAP,
  ChevronRightIcon,
  SparklesIcon,
  GitBranchIcon,
} from "./icons";

const ICONS = FILE_ICON_MAP();

type SidebarProps = {
  activeId: string;
  onOpen: (id: string) => void;
};

export function Sidebar({ activeId, onOpen }: SidebarProps) {
  return (
    <div
      className="border-r flex flex-col overflow-hidden select-none"
      style={{
        gridArea: "side",
        background: "var(--bg2)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="px-4 pt-2.5 pb-1.5 text-[10px] font-bold tracking-[0.12em] uppercase"
        style={{ color: "var(--text)" }}
      >
        Portfolio
      </div>

      <div className="flex-1 overflow-y-auto thin-scroll pb-2">
        <div className="flex items-center gap-0.5 px-2 py-0.5 text-[11px]" style={{ color: "var(--dim)" }}>
          <ChevronRightIcon className="w-3 h-3 rotate-90" />
          <span>src</span>
        </div>
        {FILES.map((f) => {
          const Icon = ICONS[f.id as keyof typeof ICONS];
          const isActive = activeId === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onOpen(f.id)}
              className="w-full flex items-center gap-2 px-4 py-[5px] text-xs cursor-pointer transition-colors"
              style={{
                background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
                color: isActive ? "var(--bright)" : "var(--text)",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{f.name}</span>
              {f.download && (
                <svg className="w-3 h-3 ml-auto opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <div className="px-3 py-2">
        <button
          type="button"
          className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] rounded-md cursor-pointer transition-colors"
          style={{
            background: "rgba(110,64,201,0.07)",
            border: "1px solid rgba(110,64,201,0.4)",
            color: "var(--purple)",
          }}
        >
          <span className="flex items-center gap-1.5">
            <SparklesIcon className="w-3 h-3" />
            Manish&apos;s Copilot
          </span>
          <span
            className="text-[9px] px-1 py-px rounded"
            style={{
              background: "rgba(110,64,201,0.2)",
              color: "var(--purple)",
            }}
          >
            AI
          </span>
        </button>
      </div>

      <div
        className="border-t px-3 py-1.5 flex items-center gap-1.5 text-[11px]"
        style={{
          borderColor: "var(--border)",
          color: "var(--dim)",
        }}
      >
        <GitBranchIcon className="w-3 h-3" />
        <span>main</span>
        <span className="ml-auto flex items-center gap-2">
          <span>↑1</span>
          <span style={{ color: "var(--pink)" }}>✦3</span>
        </span>
      </div>
    </div>
  );
}
