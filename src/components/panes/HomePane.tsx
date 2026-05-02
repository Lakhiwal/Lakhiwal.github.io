"use client";

import { useEffect, useState } from "react";
import { ROLES, STATS, TAGLINES, SOCIAL_PILLS, PROFILE } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.7 2.78a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.11-.45c.9.34 1.83.57 2.78.7a2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  phone: PhoneIcon,
} as const;

const SOCIAL_HREFS = {
  github: PROFILE.links.github,
  linkedin: PROFILE.links.linkedin,
  email: `mailto:${PROFILE.email}`,
  phone: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
} as const;

function useTypewriter(lines: string[], typeMs = 55, holdMs = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const cur = lines[i] ?? "";
    if (phase === "typing") {
      if (text.length < cur.length) {
        const t = setTimeout(
          () => setText(cur.slice(0, text.length + 1)),
          typeMs,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), holdMs);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(cur.slice(0, text.length - 1)),
          typeMs / 2,
        );
        return () => clearTimeout(t);
      }
      setI((n) => (n + 1) % lines.length);
      setPhase("typing");
    }
  }, [text, phase, i, lines, typeMs, holdMs]);

  return text;
}

export function HomePane() {
  const tagline = useTypewriter(TAGLINES);

  return (
    <div className="pane-enter">
      <div className="home-content mx-auto">
        <p
          className="text-sm mb-2.5 opacity-0 animate-su-1"
          style={{ color: "var(--gcm)" }}
        >
          // hello world !! Welcome to my portfolio
        </p>

        <div className="flex items-center gap-4 mb-3.5 opacity-0 animate-su-2">
          <h1
            className="font-display font-extrabold leading-none"
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              letterSpacing: "-2.5px",
              color: "var(--bright)",
            }}
          >
            <span className="block">Manish</span>
            <span
              className="not-italic relative"
              style={{ color: "var(--pink)" }}
            >
              Lakhiwal
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 opacity-0 animate-su-3">
          {ROLES.map((r) => (
            <span key={r.label} className="tag-pill">
              <span className="dot" style={{ background: r.color }} />
              {r.label}
            </span>
          ))}
        </div>

        <div
          className="text-xs mb-7 min-h-[18px] opacity-0 animate-su-4"
          style={{ color: "var(--dim)" }}
        >
          {tagline}
          <span className="caret" />
        </div>

        <p
          className="max-w-[640px] mb-9 leading-relaxed opacity-0 animate-su-5"
          style={{ color: "var(--text)" }}
        >
          I work across{" "}
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
          {". "}
          Currently shipping a fintech platform at{" "}
          <strong style={{ color: "var(--pink)", fontWeight: 500 }}>
            Finworks360
          </strong>{" "}
          and a published{" "}
          <strong style={{ color: "var(--blue)", fontWeight: 500 }}>
            IEEE researcher
          </strong>{" "}
          on ML for network security.
        </p>

        <div className="flex flex-wrap gap-3 mb-8 opacity-0 animate-su-6">
          <a href="#" className="btn btn-primary">
            📁 Projects
          </a>
          <a href="#" className="btn">
            👤 About Me
          </a>
          <a href="#" className="btn">
            ✉ Contact
          </a>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-8 opacity-0 animate-su-7 rounded-md overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-7"
              style={{ background: "var(--bg2)" }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "var(--bright)",
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 text-[10px] tracking-[0.16em] uppercase"
                style={{ color: "var(--dim)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 opacity-0 animate-su-8">
          {SOCIAL_PILLS.map((s) => {
            const Icon = SOCIAL_ICONS[s.id as keyof typeof SOCIAL_ICONS];
            const href = SOCIAL_HREFS[s.id as keyof typeof SOCIAL_HREFS];
            return (
              <a
                key={s.id}
                href={href}
                target={s.id === "email" || s.id === "phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="tag-pill transition-colors"
                style={{ color: "var(--text)" }}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
