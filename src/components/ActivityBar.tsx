"use client";

import { useState } from "react";
import {
  FolderIcon,
  SearchIcon,
  GitBranchIcon,
  ExtensionsIcon,
  SparklesIcon,
} from "./icons";

const TOP = [
  { id: "explorer", label: "Explorer", Icon: FolderIcon, active: true },
  { id: "search", label: "Search", Icon: SearchIcon },
  { id: "scm", label: "Source Control", Icon: GitBranchIcon },
  { id: "ext", label: "Extensions", Icon: ExtensionsIcon },
  { id: "copilot", label: "Manish's Copilot", Icon: SparklesIcon },
];

export function ActivityBar() {
  const [active, setActive] = useState("explorer");
  return (
    <div
      className="flex flex-col items-center pt-1 border-r gap-0.5"
      style={{
        gridArea: "act",
        background: "var(--bg4)",
        borderColor: "var(--border)",
      }}
    >
      {TOP.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            title={label}
            onClick={() => setActive(id)}
            className="relative w-11 h-11 flex items-center justify-center transition-colors cursor-pointer"
            style={{
              color: isActive ? "var(--bright)" : "var(--dim)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--bright)")
            }
            onMouseLeave={(e) =>
              !isActive && (e.currentTarget.style.color = "var(--dim)")
            }
          >
            {isActive && (
              <span
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-[2px]"
                style={{ background: "var(--bright)" }}
              />
            )}
            <Icon className="w-6 h-6" />
          </button>
        );
      })}

      <div className="flex-1" />

      <button
        type="button"
        title="Settings"
        className="w-11 h-11 flex items-center justify-center mb-1"
        style={{ color: "var(--dim)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.06A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.06a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.06a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </div>
  );
}
