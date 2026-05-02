"use client";

import { SearchIcon } from "./icons";

export function TitleBar() {
  return (
    <div
      className="flex items-center gap-2 px-3 border-b select-none relative"
      style={{
        gridArea: "title",
        background: "var(--title)",
        borderColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex gap-1.5">
        <button
          aria-label="close"
          className="w-3 h-3 rounded-full"
          style={{ background: "#ff5f57" }}
        />
        <button
          aria-label="minimize"
          className="w-3 h-3 rounded-full"
          style={{ background: "#febc2e" }}
        />
        <button
          aria-label="zoom"
          className="w-3 h-3 rounded-full"
          style={{ background: "#28c840" }}
        />
      </div>

      <button
        type="button"
        className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-3 py-[3px] rounded-[5px] text-[11px] transition-colors cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "var(--dim)",
        }}
      >
        <SearchIcon className="w-3 h-3" />
        manish-lakhiwal : portfolio
        <span className="flex gap-1 ml-1">
          <kbd
            className="px-1 py-[1px] rounded text-[10px]"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            Ctrl
          </kbd>
          <kbd
            className="px-1 py-[1px] rounded text-[10px]"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            P
          </kbd>
        </span>
      </button>

      <div className="w-[60px]" aria-hidden />
    </div>
  );
}
