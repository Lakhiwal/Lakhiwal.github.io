"use client";

import { ABOUT_FOCUS, EDUCATION, PROFILE, PUBLICATIONS } from "@/lib/data";

export function AboutPane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto">
        <p
          className="text-sm mb-2.5"
          style={{ color: "var(--gcm)" }}
        >
          &lt;!-- about.html - {PROFILE.name} --&gt;
        </p>
        <h1
          className="font-display mb-2"
          style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            fontWeight: 800,
            color: "var(--bright)",
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
          }}
        >
          About Me
        </h1>
        <p className="text-sm mb-7" style={{ color: "var(--dim)" }}>
          {"// who I am · what I do · where I build"}
        </p>

        <div className="section-card mb-7">
          <p style={{ color: "var(--text)", lineHeight: 1.85, fontSize: 13 }}>
            Hi! I&apos;m{" "}
            <strong style={{ color: "var(--pink)", fontWeight: 500 }}>
              {PROFILE.name}
            </strong>
            , a Full Stack Developer and ML Engineer based in{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              Faridabad
            </strong>
            . I move between{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              Java/Spring Boot
            </strong>
            ,{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              Python/Django
            </strong>
            , and{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              Flutter
            </strong>
            . Right now I&apos;m at{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              Finworks360
            </strong>{" "}
            shipping a Flutter + Django fintech platform — seller onboarding,
            invoice management, wallet. On the research side I&apos;m a published{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
              IEEE author
            </strong>{" "}
            on ML for network traffic classification and DDoS detection (97%+
            accuracy).
          </p>
        </div>

        <div className="section-card mb-7">
          <h2
            className="text-sm font-medium uppercase tracking-[0.18em] mb-4"
            style={{ color: "var(--green)" }}
          >
            Current Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {ABOUT_FOCUS.map((f) => (
              <div
                key={f.text}
                className="flex items-start gap-2 text-xs"
                style={{ color: "var(--text)", lineHeight: 1.7 }}
              >
                <span className="shrink-0">{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <h2
          className="text-sm font-medium uppercase tracking-[0.18em] mb-4 mt-8"
          style={{ color: "var(--green)" }}
        >
          Education
        </h2>

        <div className="space-y-4 mb-9">
          {EDUCATION.map((e) => (
            <div key={e.id} className="section-card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[13px] font-semibold mb-1"
                    style={{ color: "var(--bright)" }}
                  >
                    {e.icon} {e.institution}
                  </div>
                  {e.university && (
                    <div className="text-xs mb-1.5" style={{ color: "var(--text)" }}>
                      {e.university}
                    </div>
                  )}
                  <div className="text-xs mb-0.5" style={{ color: "var(--blue)" }}>
                    {e.degree}
                  </div>
                  {e.minor && (
                    <div className="text-[11px] mb-0.5" style={{ color: "var(--dim)" }}>
                      {e.minor}
                    </div>
                  )}
                  {e.gpa && (
                    <div className="text-[11px]" style={{ color: "var(--orange)" }}>
                      {e.gpa}
                    </div>
                  )}
                </div>
                <div
                  className="text-[11px] shrink-0 text-right"
                  style={{ color: "var(--dim)" }}
                >
                  {e.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="text-sm font-medium uppercase tracking-[0.18em] mb-4"
          style={{ color: "var(--green)" }}
        >
          Publications
        </h2>
        <div className="section-card mb-9">
          <ul className="space-y-2.5 text-xs" style={{ color: "var(--text)", lineHeight: 1.6 }}>
            {PUBLICATIONS.map((p) => (
              <li key={p.title} className="flex items-start gap-2">
                <span style={{ color: "var(--orange)" }}>📄</span>
                <span>
                  <span style={{ color: "var(--bright)" }}>{p.title}</span>
                  <span style={{ color: "var(--dim)" }}> — {p.venue} ({p.year})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
