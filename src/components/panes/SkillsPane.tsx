"use client";

import { SKILLS } from "@/lib/data";

export function SkillsPane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto" style={{ maxWidth: 1200 }}>
        <p className="text-sm mb-2.5" style={{ color: "var(--gcm)" }}>
          {`{ "skills.json": "what I work with" }`}
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
          Skills
        </h1>
        <p className="text-xs mb-7" style={{ color: "var(--dim)" }}>
          {"// confidence levels (self-rated, no impostor syndrome here 💜)"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 pb-8">
          {SKILLS.map((g) => (
            <section key={g.group}>
              <h2
                className="text-[11px] tracking-[0.18em] uppercase font-medium mb-3"
                style={{ color: "var(--green)" }}
              >
                {g.group}
              </h2>
              {g.items.map((s) => (
                <div key={s.name} className="skill-row">
                  <span style={{ color: "var(--text)" }}>{s.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${s.pct}%`,
                        background: s.color,
                      }}
                    />
                  </div>
                  <span
                    className="text-right text-[11px]"
                    style={{ color: s.color }}
                  >
                    {s.pct}%
                  </span>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
