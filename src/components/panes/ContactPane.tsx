"use client";

import { CONTACTS } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import type { SVGProps } from "react";

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.7 2.78a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.11-.45c.9.34 1.83.57 2.78.7a2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

const ICONS: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  phone: PhoneIcon,
};

export function ContactPane() {
  return (
    <div className="pane-enter">
      <div className="home-content mx-auto" style={{ maxWidth: 1100 }}>
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
          Contact
        </h1>
        <p className="text-xs mb-8" style={{ color: "var(--dim)" }}>
          {"// open to work, collabs & good conversations"}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-[11px] tracking-[0.22em] uppercase font-medium mb-4"
              style={{ color: "var(--green)" }}
            >
              Find me on
            </h2>
            <div className="flex flex-col gap-2">
              {CONTACTS.map((c) => {
                const Icon = ICONS[c.id] ?? MailIcon;
                return (
                  <a
                    key={c.id}
                    href={c.href}
                    target={c.id === "email" || c.id === "phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="section-card flex items-center gap-3 transition-colors group"
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded shrink-0"
                      style={{
                        background: `${c.color}1a`,
                        color: c.color,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[10px] tracking-[0.2em] uppercase font-medium"
                        style={{ color: c.color }}
                      >
                        {c.label}
                      </div>
                      <div
                        className="text-xs truncate"
                        style={{ color: "var(--text)" }}
                      >
                        {c.value}
                      </div>
                    </div>
                    <ArrowUpRightIcon
                      className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--dim)" }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2
              className="text-[11px] tracking-[0.22em] uppercase font-medium mb-4"
              style={{ color: "var(--green)" }}
            >
              Send a message
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <Field label="// YOUR_NAME" required>
                <input className="contact-input" placeholder="string" />
              </Field>
              <Field label="// YOUR_EMAIL" required>
                <input
                  type="email"
                  className="contact-input"
                  placeholder="string"
                />
              </Field>
              <Field label="// SUBJECT">
                <input className="contact-input" placeholder="string" />
              </Field>
              <Field label="// MESSAGE" required>
                <textarea
                  rows={5}
                  className="contact-input resize-y"
                  placeholder="```your message```"
                />
              </Field>
              <button
                type="submit"
                className="btn btn-primary justify-center"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                → send_message()
              </button>
              <p
                className="text-[11px] mt-1"
                style={{ color: "var(--dim)" }}
              >
                {"// Drop me an email or LinkedIn DM — fastest way to reach me"}
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          padding: 9px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text);
          font-family: inherit;
          font-size: 12px;
          outline: none;
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .contact-input:focus {
          border-color: var(--blue);
          background: rgba(79, 193, 255, 0.04);
        }
        .contact-input::placeholder {
          color: var(--dim);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[10px] tracking-[0.18em] uppercase font-medium flex items-center gap-1"
        style={{ color: "var(--green)" }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--red)" }}>*</span>
        )}
      </span>
      {children}
    </label>
  );
}
