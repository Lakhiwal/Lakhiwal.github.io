import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FolderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function GitBranchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 7v10" />
      <path d="M6 12c6 0 10-2 10-7" />
    </svg>
  );
}

export function PluginIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 4v3a1 1 0 0 0 1 1h3" />
      <rect x="3" y="3" width="11" height="11" rx="1" />
      <rect x="10" y="10" width="11" height="11" rx="1" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2 13.8 8.2 20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="19" r="1.5" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.69 0h4.37v2.05h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7v8.34h-4.55v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H7.91V8z" />
    </svg>
  );
}

export function MediumIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75 0-3.17.53-5.75 1.19-5.75.66 0 1.19 2.58 1.19 5.75" />
    </svg>
  );
}

export function TableauIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.6 0v3.2H8.4v1.5h3.2v3.2h.7V4.7h3.2V3.2h-3.2V0zM5.5 5.4v2.8h-3v1.3h3v2.8h.6V9.5h3V8.2h-3V5.4zm12.4 0v2.8h-3v1.3h3v2.8h.6V9.5h3V8.2h-3V5.4zM2.4 12.5v2.4H0v1h2.4v2.5h.5v-2.5h2.4v-1H2.9v-2.4zm18.7 0v2.4h-2.4v1h2.4v2.5h.5v-2.5H24v-1h-2.4v-2.4zM12 14.4v2.4H9.6v1H12v2.5h.5v-2.5h2.4v-1h-2.4v-2.4zm-3.4 5.5v2h-2v.9h2v2h.5v-2h2v-.9h-2v-2zm6.2 0v2h-2v.9h2v2h.5v-2h2v-.9h-2v-2zM12 22.7v.7h.5v-.7z" />
    </svg>
  );
}

export function LeetCodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m13.48 19.84-3.18 3.18a4.7 4.7 0 0 1-6.66 0 4.7 4.7 0 0 1 0-6.66l5.18-5.17a4.7 4.7 0 0 1 6.66 0l3.04 3.05a1.4 1.4 0 0 1 0 1.97 1.4 1.4 0 0 1-1.97 0l-3.04-3.04a1.9 1.9 0 0 0-2.71 0L5.62 18.34a1.92 1.92 0 0 0 2.72 2.72l3.18-3.19a1.4 1.4 0 1 1 1.96 1.97zM21.46 13H13.7a1.4 1.4 0 1 0 0 2.78h7.76a1.4 1.4 0 1 0 0-2.78z" />
      <path d="M9.7 4.16 14.96 9.4a1.4 1.4 0 1 0 1.96-1.97l-5.25-5.26a4.7 4.7 0 0 0-6.66 0L3.64 3.55a4.7 4.7 0 0 0 0 6.66l3.04 3.04a1.4 1.4 0 0 0 1.97-1.97L5.62 8.24a1.92 1.92 0 0 1 0-2.72l1.36-1.36a1.92 1.92 0 0 1 2.72 0z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .63 4.14C.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.3.79.71 1.46 1.39 2.13.67.68 1.34 1.09 2.13 1.39.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56.79-.3 1.46-.71 2.13-1.39a5.9 5.9 0 0 0 1.39-2.13c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" fill="none" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function HtmlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#e34c26" {...props}>
      <path d="m3 2 1.6 18 7.4 2 7.4-2L21 2H3zm14.7 5H8.4l.2 2.5h8.7L17 17.5l-5 1.4-5-1.4-.3-3.6h2.4l.2 1.8 2.7.7 2.7-.7.3-3.4H7.1L6.5 5h11l.2 2z" />
    </svg>
  );
}

export function JsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#f7df1e" {...props}>
      <path d="M0 0h24v24H0z" />
      <path fill="#000" d="M7.7 18.85c.5.94 1.18 1.65 2.5 1.65 1.18 0 1.93-.59 1.93-1.4 0-.97-.77-1.32-2.07-1.89l-.7-.3c-2.05-.87-3.42-1.97-3.42-4.3 0-2.14 1.63-3.77 4.18-3.77 1.81 0 3.12.63 4.06 2.28L13 12.4c-.49-.88-1.02-1.22-1.84-1.22-.84 0-1.37.53-1.37 1.22 0 .85.53 1.2 1.75 1.73l.7.3c2.42 1.04 3.79 2.1 3.79 4.5 0 2.57-2.02 3.97-4.74 3.97-2.66 0-4.38-1.27-5.22-2.94l2.62-1.51zM2.6 19.04c.45.79.85 1.46 1.83 1.46.93 0 1.52-.36 1.52-1.78V9.18h2.86V18.8c0 2.96-1.74 4.3-4.27 4.3-2.29 0-3.61-1.18-4.29-2.61L2.6 19.04z" />
    </svg>
  );
}

export function TsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#3178c6" {...props}>
      <rect width="24" height="24" rx="2" />
      <path fill="#fff" d="M9.5 13.5h2.4v6.5h1.7v-6.5h2.4V12H9.5v1.5zm10.6 5.7v-1.7c-.3.13-.6.22-.92.27a3.36 3.36 0 0 1-.93.04 1.4 1.4 0 0 1-.69-.21.7.7 0 0 1-.27-.55c0-.18.05-.34.15-.47.1-.13.24-.25.42-.36l.6-.34.79-.4a4 4 0 0 0 .9-.59c.27-.23.49-.5.65-.83.16-.32.24-.7.24-1.13 0-.55-.1-1.02-.3-1.4a2.4 2.4 0 0 0-.85-.94 3.7 3.7 0 0 0-1.27-.51 7.4 7.4 0 0 0-1.65-.16c-.36 0-.7.02-1.04.07-.34.04-.66.12-.97.22V13.7c.32-.18.66-.3 1-.4a4 4 0 0 1 1.04-.13c.27 0 .51.02.72.07.21.04.39.11.53.21.14.1.24.21.31.34a.92.92 0 0 1 .04.74c-.07.13-.18.25-.32.36-.14.11-.32.22-.55.34l-.74.36a7 7 0 0 0-.9.6 4 4 0 0 0-.7.7c-.2.27-.36.57-.46.91a3.5 3.5 0 0 0-.16 1.13c0 .65.13 1.21.4 1.65.27.45.66.78 1.18.99.51.21 1.13.32 1.85.32.4 0 .79-.04 1.15-.11.36-.07.7-.17 1.02-.31z" />
    </svg>
  );
}

export function JsonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#fbbf24" {...props}>
      <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm3.5 5h2v3h2.5v2H10.5v3.5c0 .8-.4 1-1 1h-2v-2h1V13h-2v-2h2V8h.5zm5 1.5h2c.8 0 1 .4 1 1v3.5h-3v-1h2V11h-2v-1z" />
    </svg>
  );
}

export function CssIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#264de4" {...props}>
      <path d="m3 2 1.6 18 7.4 2 7.4-2L21 2H3zm14.7 5H8.4l.2 2.5h8.7L17 17.5l-5 1.4-5-1.4-.3-3.6h2.4l.2 1.8 2.7.7 2.7-.7.3-3.4H7.1L6.5 5h11l.2 2z" />
    </svg>
  );
}

export function MarkdownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#519aba" {...props}>
      <path d="M2.85 5h18.3c.47 0 .85.38.85.85v12.3c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85V5.85C2 5.38 2.38 5 2.85 5zM5.5 16v-5l2 2.5L9.5 11v5h2V8h-2l-2 2.5L5.5 8h-2v8h2zm9.5 0h2v-3h2l-3-3.5-3 3.5h2v3z" />
    </svg>
  );
}

export function PdfIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#f44747" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM7 14h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H8v2H7v-5zm1 1v1h1v-1H8zm3-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2v-5zm1 1v3h1v-3h-1zm3-1h3v1h-2v1h2v1h-2v2h-1v-5z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export function ExtensionsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function FILE_ICON_MAP() {
  return {
    home: ReactIcon,
    about: HtmlIcon,
    projects: JsIcon,
    skills: JsonIcon,
    experience: TsIcon,
    contact: CssIcon,
    readme: MarkdownIcon,
    resume: PdfIcon,
  } as const;
}
