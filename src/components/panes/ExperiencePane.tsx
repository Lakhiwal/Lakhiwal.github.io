"use client";

import { EXPERIENCE } from "@/lib/data";

export function ExperiencePane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto">
        <p className="text-sm mb-2.5" style={{ color: "var(--gcm)" }}>
          // experience.ts : where I&apos;ve learned, built &amp; shipped
        </p>
        <h1
          className="font-display mb-2"
          style={{
            fontSize: "clamp(44px, 6.5vw, 76px)",
            fontWeight: 800,
            color: "var(--bright)",
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
          }}
        >
          Experience
        </h1>
        <p className="text-xs mb-8" style={{ color: "var(--dim)" }}>
          interface Career extends Timeline {`{}`}
        </p>

        <div className="relative pl-6 pb-8">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ background: "var(--border)" }}
          />
          {EXPERIENCE.map((e, idx) => (
            <div key={idx} className="relative mb-9 last:mb-0">
              <span
                aria-hidden
                className="absolute -left-6 top-2 w-[15px] h-[15px] rounded-full border-2"
                style={{
                  background: e.current ? "var(--blue)" : "var(--bg)",
                  borderColor: e.current ? "var(--blue)" : "var(--dim)",
                }}
              />
              <div className="text-[11px] mb-2" style={{ color: "var(--dim)" }}>
                {e.date}
              </div>
              <h3
                className="font-display mb-1"
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--bright)",
                }}
              >
                {e.role}
              </h3>
              <div
                className="text-xs mb-3"
                style={{ color: "var(--blue)" }}
              >
                @ {e.company}
                {e.location && (
                  <span style={{ color: "var(--dim)" }}> · {e.location}</span>
                )}
              </div>
              <p
                className="text-xs mb-3 max-w-[640px]"
                style={{ color: "var(--text)", lineHeight: 1.7 }}
              >
                {e.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(79,193,255,0.08)",
                      color: "var(--blue)",
                      border: "1px solid rgba(79,193,255,0.3)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
