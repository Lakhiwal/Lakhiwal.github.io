"use client";

import { useEffect, useMemo, useState } from "react";
import { TitleBar } from "@/components/TitleBar";
import { MenuBar } from "@/components/MenuBar";
import { ActivityBar, type ActivityAction } from "@/components/ActivityBar";
import { Sidebar } from "@/components/Sidebar";
import { EditorTabs } from "@/components/EditorTabs";
import { StatusBar, nextTheme } from "@/components/StatusBar";
import { CommandPalette } from "@/components/CommandPalette";
import { SourceControlPopover } from "@/components/SourceControlPopover";
import { CopilotPanel } from "@/components/CopilotPanel";
import { HomePane } from "@/components/panes/HomePane";
import { AboutPane } from "@/components/panes/AboutPane";
import { ProjectsPane } from "@/components/panes/ProjectsPane";
import { SkillsPane } from "@/components/panes/SkillsPane";
import { ExperiencePane } from "@/components/panes/ExperiencePane";
import { ContactPane } from "@/components/panes/ContactPane";
import { ReadmePane } from "@/components/panes/ReadmePane";
import { FILES, THEMES } from "@/lib/data";

const PANE_BY_ID = {
  home: HomePane,
  about: AboutPane,
  projects: ProjectsPane,
  skills: SkillsPane,
  experience: ExperiencePane,
  contact: ContactPane,
  readme: ReadmePane,
} as const;

const STORAGE_KEY = "aahana-portfolio-theme";
const RESUME_PATH = "/files/Manish_Lakhiwal_Resume.pdf";

export default function Home() {
  const [openIds, setOpenIds] = useState<string[]>(["home"]);
  const [activeId, setActiveId] = useState<string>("home");
  const [themeId, setThemeId] = useState<string>("default");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scmOpen, setScmOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const t = setTimeout(() => setThemeId(stored), 0);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
    localStorage.setItem(STORAGE_KEY, themeId);
  }, [themeId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.ctrlKey || e.metaKey;
      if (meta && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setPaletteOpen(true);
        setScmOpen(false);
      } else if (meta && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        setCopilotOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const theme = useMemo(
    () => THEMES.find((t) => t.id === themeId) ?? THEMES[0],
    [themeId],
  );
  const activeFile = FILES.find((f) => f.id === activeId) ?? null;

  const downloadResume = () => {
    window.open(RESUME_PATH, "_blank");
  };

  const openFile = (id: string) => {
    if (id === "resume") {
      downloadResume();
      return;
    }
    setOpenIds((cur) => (cur.includes(id) ? cur : [...cur, id]));
    setActiveId(id);
  };

  const closeTab = (id: string) => {
    setOpenIds((cur) => {
      const next = cur.filter((x) => x !== id);
      if (next.length === 0) {
        setActiveId("home");
        return ["home"];
      }
      if (id === activeId) setActiveId(next[next.length - 1]);
      return next;
    });
  };

  const onActivityAction = (id: ActivityAction) => {
    if (id === "explorer") {
      setScmOpen(false);
      return;
    }
    if (id === "search") {
      setPaletteOpen(true);
      setScmOpen(false);
      return;
    }
    if (id === "scm") {
      setScmOpen((v) => !v);
      return;
    }
    if (id === "resume") {
      downloadResume();
      return;
    }
    if (id === "copilot") {
      setCopilotOpen((v) => !v);
      return;
    }
  };

  const Pane =
    PANE_BY_ID[activeId as keyof typeof PANE_BY_ID] ?? HomePane;

  const activeView: "explorer" | "scm" | "search" | "copilot" = scmOpen
    ? "scm"
    : paletteOpen
      ? "search"
      : copilotOpen
        ? "copilot"
        : "explorer";

  return (
    <div className={`app-grid${copilotOpen ? " copilot-open" : ""}`}>
      <TitleBar />
      <MenuBar />
      <ActivityBar activeView={activeView} onAction={onActivityAction} />
      <Sidebar
        activeId={activeId}
        onOpen={openFile}
        copilotOpen={copilotOpen}
        onToggleCopilot={() => setCopilotOpen((v) => !v)}
      />

      <div
        className="flex flex-col overflow-hidden min-w-0"
        style={{ gridArea: "editor", background: "var(--bg)" }}
      >
        <EditorTabs
          openIds={openIds}
          activeId={activeId}
          onSelect={setActiveId}
          onClose={closeTab}
        />
        <div className="editor-pane">
          <Pane key={activeId} />
        </div>
      </div>

      <CopilotPanel
        open={copilotOpen}
        onClose={() => setCopilotOpen(false)}
      />

      <SourceControlPopover open={scmOpen} onClose={() => setScmOpen(false)} />

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onOpenFile={openFile}
          onOpenCopilot={() => setCopilotOpen(true)}
        />
      )}

      <StatusBar
        active={activeFile}
        theme={theme}
        onCycleTheme={() => setThemeId(nextTheme(themeId).id)}
      />
    </div>
  );
}
