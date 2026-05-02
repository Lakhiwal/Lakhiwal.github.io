"use client";

import { useEffect, useRef } from "react";
import { GitBranchIcon, ArrowUpRightIcon } from "./icons";
import { SCM_STATUS } from "@/lib/data";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function SourceControlPopover({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const t = setTimeout(() => {
      document.addEventListener("mousedown", onDoc);
      document.addEventListener("keydown", onKey);
    }, 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute z-40 panel-fade-in rounded-md shadow-xl text-xs"
      style={{
        top: 116,
        left: 48,
        width: 240,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        color: "var(--text)",
      }}
      role="dialog"
    >
      <div
        className="px-3 py-2 text-[10px] font-bold tracking-[0.12em] uppercase border-b"
        style={{ borderColor: "var(--border)", color: "var(--dim)" }}
      >
        Source Control
      </div>

      <div className="px-3 py-2 flex items-center gap-2">
        <GitBranchIcon className="w-3.5 h-3.5" style={{ color: "var(--green)" }} />
        <span style={{ color: "var(--bright)" }}>{SCM_STATUS.branch}</span>
        <span className="ml-auto" style={{ color: "var(--green)" }}>
          ↑ {SCM_STATUS.commitsAhead} commit{SCM_STATUS.commitsAhead === 1 ? "" : "s"} ahead
        </span>
      </div>

      <div
        className="grid grid-cols-3 gap-2 px-3 py-2 border-t border-b text-center"
        style={{ borderColor: "var(--border)" }}
      >
        <Stat color="var(--orange)" value={SCM_STATUS.modified} label="Modified" />
        <Stat color="var(--green)" value={SCM_STATUS.added} label="Added" />
        <Stat color="var(--red)" value={SCM_STATUS.deleted} label="Deleted" />
      </div>

      <a
        href={SCM_STATUS.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 flex items-center gap-1.5 cursor-pointer"
        style={{ color: "var(--blue)" }}
      >
        View on GitHub
        <ArrowUpRightIcon className="w-3 h-3" />
      </a>
    </div>
  );
}

function Stat({ color, value, label }: { color: string; value: number; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-base font-mono" style={{ color }}>
        {value}
      </span>
      <span className="text-[10px]" style={{ color: "var(--dim)" }}>
        {label}
      </span>
    </div>
  );
}
