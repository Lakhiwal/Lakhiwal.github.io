"use client";

import { PROFILE, PUBLICATIONS } from "@/lib/data";

export function ReadmePane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto" style={{ maxWidth: 900 }}>
        <h1
          className="font-display mb-3"
          style={{
            fontSize: "clamp(40px, 5.5vw, 60px)",
            fontWeight: 800,
            color: "var(--bright)",
            letterSpacing: "-1px",
            lineHeight: 1.05,
          }}
        >
          # Manish Lakhiwal
        </h1>
        <p className="text-sm mb-4" style={{ color: "var(--text)" }}>
          {PROFILE.role} · {PROFILE.location}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {[
            { label: "Python", color: "#4fc1ff" },
            { label: "Java", color: "#f97316" },
            { label: "Flutter", color: "#38bdf8" },
            { label: "Django", color: "#4ec9b0" },
            { label: "TensorFlow", color: "#ce9178" },
          ].map((b) => (
            <span
              key={b.label}
              className="text-[11px] px-2.5 py-1 rounded flex items-center gap-1.5"
              style={{
                background: `${b.color}1a`,
                color: b.color,
                border: `1px solid ${b.color}40`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: b.color }}
              />
              {b.label}
            </span>
          ))}
        </div>

        <h2
          className="font-display flex items-center gap-2 mb-3"
          style={{ fontSize: 18, fontWeight: 700, color: "var(--pink)" }}
        >
          💜 About
        </h2>
        <p
          className="text-xs mb-5"
          style={{ color: "var(--text)", lineHeight: 1.85 }}
        >
          {PROFILE.bio}
        </p>

        <ul className="text-xs mb-7 space-y-1.5" style={{ color: "var(--text)" }}>
          <li>
            🛠️ Building a <strong style={{ color: "var(--blue)", fontWeight: 500 }}>Flutter + Django fintech platform</strong> at Finworks360
          </li>
          <li>📡 Sub-100ms DDoS detection on a Ryu SDN controller</li>
          <li>📰 Published <strong style={{ color: "var(--blue)", fontWeight: 500 }}>4 papers</strong> across IEEE & Taylor & Francis</li>
          <li>✨ Always learning, always shipping</li>
        </ul>

        <h2
          className="font-display mb-4"
          style={{ fontSize: 28, fontWeight: 700, color: "var(--bright)" }}
        >
          ## Stack
        </h2>
        {[
          { k: "Languages:", v: ["Python", "Java", "Dart", "SQL", "JavaScript"] },
          { k: "Backend:", v: ["Django", "DRF", "Spring Boot", "Flask", "REST APIs"] },
          { k: "Mobile:", v: ["Flutter", "Material 3"] },
          { k: "ML / AI:", v: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Whisper", "HuggingFace"] },
          { k: "Databases:", v: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"] },
          { k: "DevOps:", v: ["Docker", "AWS", "Render", "Git"] },
        ].map(({ k, v }) => (
          <div key={k} className="flex items-center gap-3 flex-wrap mb-2 text-xs">
            <span style={{ color: "var(--blue)", minWidth: 90 }}>{k}</span>
            {v.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[11px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ))}

        <h2
          className="font-display mb-4 mt-8"
          style={{ fontSize: 28, fontWeight: 700, color: "var(--bright)" }}
        >
          ## Publications
        </h2>
        <ul className="text-xs space-y-2 pb-2" style={{ color: "var(--text)" }}>
          {PUBLICATIONS.map((p) => (
            <li key={p.title}>
              <span style={{ color: "var(--orange)" }}>•</span>{" "}
              <span style={{ color: "var(--bright)" }}>{p.title}</span>{" "}
              <span style={{ color: "var(--dim)" }}>— {p.venue} ({p.year})</span>
            </li>
          ))}
        </ul>

        <h2
          className="font-display mb-4 mt-7"
          style={{ fontSize: 28, fontWeight: 700, color: "var(--bright)" }}
        >
          ## Connect
        </h2>
        <div className="text-xs space-y-1 pb-8" style={{ color: "var(--text)" }}>
          <p>
            <span style={{ color: "var(--blue)" }}>Email:</span>{" "}
            <a
              href={`mailto:${PROFILE.email}`}
              style={{ color: "var(--pink)" }}
            >
              {PROFILE.email}
            </a>
          </p>
          <p>
            <span style={{ color: "var(--blue)" }}>Phone:</span>{" "}
            <span style={{ color: "var(--pink)" }}>{PROFILE.phone}</span>
          </p>
          <p>
            <span style={{ color: "var(--blue)" }}>GitHub:</span>{" "}
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--pink)" }}
            >
              github.com/Lakhiwal
            </a>
          </p>
          <p>
            <span style={{ color: "var(--blue)" }}>LinkedIn:</span>{" "}
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--pink)" }}
            >
              linkedin.com/in/manishlakhiwal
            </a>
          </p>
        </div>

        <p
          className="text-[11px] pt-4 border-t"
          style={{ color: "var(--dim)", borderColor: "var(--border)" }}
        >
          Portfolio · Next.js + React + Tailwind
        </p>
      </div>
    </div>
  );
}
