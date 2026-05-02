"use client";

import { FILES } from "@/lib/data";
import type { FileItem } from "@/lib/data";
import { CloseIcon, FILE_ICON_MAP, ChevronRightIcon } from "./icons";

const ICONS = FILE_ICON_MAP();

type Props = {
  openIds: string[];
  activeId: string;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
};

export function EditorTabs({ openIds, activeId, onSelect, onClose }: Props) {
  const tabs = openIds
    .map((id) => FILES.find((f) => f.id === id))
    .filter((f): f is FileItem => Boolean(f));
  const active = tabs.find((t) => t.id === activeId);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-end h-[35px] overflow-x-auto thin-scroll"
        style={{
          background: "var(--bg3)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {tabs.map((t) => {
          const Icon = ICONS[t.id as keyof typeof ICONS];
          const isActive = t.id === activeId;
          return (
            <div
              key={t.id}
              className="group flex items-center gap-2 pl-3 pr-2 h-[35px] text-xs cursor-pointer relative shrink-0"
              style={{
                background: isActive ? "var(--bg)" : "var(--bg3)",
                color: isActive ? "var(--bright)" : "var(--dim)",
                borderRight: "1px solid var(--border)",
              }}
              onClick={() => onSelect(t.id)}
            >
              {isActive && (
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "var(--blue)" }}
                />
              )}
              <Icon className="w-4 h-4 shrink-0" />
              <span>{t.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(t.id);
                }}
                className="w-4 h-4 flex items-center justify-center rounded opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text)" }}
              >
                <CloseIcon className="w-3 h-3" />
              </button>
            </div>
          );
        })}
        <div className="flex-1" style={{ background: "var(--bg3)" }} />
      </div>

      {active && (
        <div
          className="flex items-center gap-1 px-3 py-1.5 text-[11px]"
          style={{ color: "var(--dim)", background: "var(--bg)" }}
        >
          <span>manish-lakhiwal</span>
          <ChevronRightIcon className="w-3 h-3" />
          <span>{active.folder}</span>
          <ChevronRightIcon className="w-3 h-3" />
          <span style={{ color: "var(--text)" }}>{active.name}</span>
        </div>
      )}
    </div>
  );
}
