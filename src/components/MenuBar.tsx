"use client";

const ITEMS = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help", "Copilot"];

export function MenuBar() {
  return (
    <div
      className="flex items-center gap-0.5 px-2 border-b text-[11px]"
      style={{
        gridArea: "menu",
        background: "var(--bg3)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      {ITEMS.map((label) => (
        <button
          key={label}
          type="button"
          className="px-2 py-[2px] rounded transition-colors cursor-pointer"
          style={{ color: "var(--text)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}
