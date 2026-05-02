"use client";

import { useEffect, useMemo, useState } from "react";
import { TitleBar } from "@/components/TitleBar";
import { MenuBar } from "@/components/MenuBar";
import { ActivityBar } from "@/components/ActivityBar";
import { Sidebar } from "@/components/Sidebar";
import { EditorTabs } from "@/components/EditorTabs";
import { StatusBar, nextTheme } from "@/components/StatusBar";
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

export default function Home() {
  const [openIds, setOpenIds] = useState<string[]>(["home"]);
  const [activeId, setActiveId] = useState<string>("home");
  const [themeId, setThemeId] = useState<string>("default");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setThemeId(stored);
  }, []);

  useEffect(() => {
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
    localStorage.setItem(STORAGE_KEY, themeId);
  }, [themeId]);

  const theme = useMemo(
    () => THEMES.find((t) => t.id === themeId) ?? THEMES[0],
    [themeId],
  );
  const activeFile = FILES.find((f) => f.id === activeId) ?? null;

  const openFile = (id: string) => {
    if (id === "resume") {
      window.open("/files/Manish_Lakhiwal_Resume.pdf", "_blank");
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

  const Pane =
    PANE_BY_ID[activeId as keyof typeof PANE_BY_ID] ?? HomePane;

  return (
    <div className="app-grid">
      <TitleBar />
      <MenuBar />
      <ActivityBar />
      <Sidebar activeId={activeId} onOpen={openFile} />

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

      <StatusBar
        active={activeFile}
        theme={theme}
        onCycleTheme={() => setThemeId(nextTheme(themeId).id)}
      />
    </div>
  );
}
