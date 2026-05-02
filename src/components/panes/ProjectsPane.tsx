"use client";

import { PROJECTS } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/icons";

export function ProjectsPane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto" style={{ maxWidth: 1200 }}>
        <p className="text-sm mb-2.5" style={{ color: "var(--gcm)" }}>
          // projects.js : things I&apos;ve built &amp; shipped
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
          Projects
        </h1>
        <p className="text-xs mb-6" style={{ color: "var(--dim)" }}>
          const projects = [ ...shipped, ...building ]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-8">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="section-card flex flex-col gap-3 transition-colors"
              style={{ minHeight: 220 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-md text-xl"
                  style={{
                    background: `${p.accent}1a`,
                    border: `1px solid ${p.accent}33`,
                  }}
                >
                  {p.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] flex items-center gap-1 px-2 py-1 rounded transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--blue)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      GitHub <ArrowUpRightIcon className="w-3 h-3" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] flex items-center gap-1 px-2 py-1 rounded transition-colors"
                      style={{
                        background: "rgba(255,111,216,0.12)",
                        color: "var(--pink)",
                        border: "1px solid rgba(255,111,216,0.4)",
                      }}
                    >
                      Live <ArrowUpRightIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div
                className="text-[10px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "var(--pink)" }}
              >
                {p.type}
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--bright)",
                  lineHeight: 1.2,
                }}
              >
                {p.name}
              </h3>

              <p
                className="text-xs"
                style={{ color: "var(--text)", lineHeight: 1.7 }}
              >
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
