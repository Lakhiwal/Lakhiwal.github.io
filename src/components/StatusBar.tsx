"use client";

import { useEffect, useState } from "react";
import { GitBranchIcon } from "./icons";
import type { FileItem } from "@/lib/data";
import { THEMES, type Theme } from "@/lib/data";

type Props = {
  active: FileItem | null;
  theme: Theme;
  onCycleTheme: () => void;
};

export function StatusBar({ active, theme, onCycleTheme }: Props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="flex items-center justify-between px-3 text-[11px] select-none"
      style={{
        gridArea: "status",
        background: "var(--blue2)",
        color: "white",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="opacity-90">⚠</span> 0
        </span>
        <span className="flex items-center gap-1">
          <span className="opacity-90">⊗</span> 0
        </span>
        <span className="flex items-center gap-1">
          <GitBranchIcon className="w-3 h-3" /> main
        </span>
        <span className="flex items-center gap-1">
          🔄 Manish&apos;s Portfolio
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span>Copilot</span>
        <span>{active?.lang ?? "Plain Text"}</span>
        <span>UTF-8</span>
        <span>Prettier</span>
        <button
          type="button"
          onClick={onCycleTheme}
          className="flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-80"
          title={`Theme: ${theme.name} (click to switch)`}
        >
          <span>{theme.icon}</span>
          <span>{theme.name}</span>
          <span className="ml-0.5">▲</span>
        </button>
        <span>{time}</span>
      </div>
    </div>
  );
}

export function nextTheme(currentId: string): Theme {
  const idx = THEMES.findIndex((t) => t.id === currentId);
  return THEMES[(idx + 1) % THEMES.length];
}
