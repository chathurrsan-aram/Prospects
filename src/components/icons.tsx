import type { RouteType, SectorId } from "@/lib/types";

/**
 * Inline SVG icon set — hand-drawn geometric strokes, currentColor so every
 * icon follows the theme (dark mode, high contrast) for free. Inline SVG
 * keeps the site visual at zero network cost (spec principle 1: low data).
 */

export interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

function Svg({
  size = 24,
  className,
  title,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}

/* ---------- Sector icons ---------- */

export const BookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 6c-1.8-1.6-4.4-2-7-2v13c2.6 0 5.2.4 7 2 1.8-1.6 4.4-2 7-2V4c-2.6 0-5.2.4-7 2z" />
    <path d="M12 6v13" />
  </Svg>
);

export const HealthIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20.5s-7.5-4.7-7.5-10A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9c0 5.3-7.5 10-7.5 10z" />
    <path d="M8.5 12h2l1-2 1.5 4 1-2h1.5" />
  </Svg>
);

export const CodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="5" width="19" height="13" rx="1.5" />
    <path d="M8.5 9.5 6 12l2.5 2.5M15.5 9.5 18 12l-2.5 2.5M13 8.8l-2 6.4" />
  </Svg>
);

export const HardHatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 15a8 8 0 0 1 16 0" />
    <path d="M10 7.5V11M14 7.5V11M10 7.5a2 2 0 0 1 4 0" />
    <path d="M2.8 15h18.4v2.4H2.8z" />
  </Svg>
);

export const CoinsIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="9" r="5.5" />
    <path d="M9 6.5v5M7.2 8h3.6M15.8 8.2a5.5 5.5 0 1 1-7.6 7.6" />
  </Svg>
);

export const PalmIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="17" cy="7" r="2.6" />
    <path d="M3 18.5c3-1.2 6-1.2 9 0 3-1.2 6-1.2 9 0" />
    <path d="M9.5 15.5c.3-4.5 1.5-8 4-10.5M9 6.5C10.5 8 11.5 9.5 12 12M6 9c2 .3 4 1.5 5.3 3" />
  </Svg>
);

export const BuildingIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20V9l8-5 8 5v11" />
    <path d="M2.8 20h18.4M8 20v-4h2.5v4M13.5 20v-4H16v4M12 9.2h.01" />
  </Svg>
);

export const GearIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4" />
  </Svg>
);

export const PeopleIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="8.5" cy="9" r="3" />
    <circle cx="16" cy="10.5" r="2.3" />
    <path d="M3.5 19c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5M14 19c.3-1.8 1.2-3 3-3 1.6 0 2.7 1 3.2 2.8" />
  </Svg>
);

export const SECTOR_ICONS: Record<SectorId, (p: IconProps) => React.ReactElement> = {
  education: BookIcon,
  health: HealthIcon,
  ict: CodeIcon,
  construction: HardHatIcon,
  finance: CoinsIcon,
  tourism: PalmIcon,
  "public-service": BuildingIcon,
  trades: GearIcon,
  community: PeopleIcon,
};

/* ---------- Route-type icons ---------- */

export const GradCapIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 4 10 4.5L12 13 2 8.5 12 4z" />
    <path d="M6.5 10.8V15c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2M20 9.5V15" />
  </Svg>
);

export const WrenchBadgeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.5 6.5a4 4 0 0 0-5.4 4.8L4 16.4V20h3.6l5.1-5.1a4 4 0 0 0 4.8-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" />
    <circle cx="18" cy="18" r="3" />
    <path d="m17 18 .8.8 1.4-1.6" />
  </Svg>
);

export const HammerHandIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20c2.5-1 5-1 7.5.2M14 6.5 9.8 10.7a1.8 1.8 0 0 0 2.5 2.5L16.5 9" />
    <path d="M13 4.5 19.5 11M15 3l4 4" />
  </Svg>
);

export const CertificateIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="4.5" width="17" height="12" rx="1.5" />
    <path d="M7 8.5h6M7 11.5h4" />
    <circle cx="16.5" cy="12.5" r="2" />
    <path d="m15.5 14 -.8 4 1.8-1 1.8 1-.8-4" />
  </Svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
    <path d="M9 8V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2M3.5 12.5h17" />
  </Svg>
);

export const ROUTE_ICONS: Record<RouteType, (p: IconProps) => React.ReactElement> = {
  university: GradCapIcon,
  tvet: WrenchBadgeIcon,
  apprenticeship: HammerHandIcon,
  professional: CertificateIcon,
  workfirst: BriefcaseIcon,
};

/* ---------- Stage / UI icons ---------- */

export const PencilExamIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="3.5" width="12" height="17" rx="1.5" />
    <path d="M7.5 8h5M7.5 11h5M7.5 14h3" />
    <path d="m19.8 8.6-4.6 4.6-.6 2.4 2.4-.6 4.6-4.6a1.3 1.3 0 0 0-1.8-1.8z" />
  </Svg>
);

export const CompassIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
  </Svg>
);

export const SignpostIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v18M8 21h8" />
    <path d="M12 5h6.5l2 2-2 2H12M12 12h-7l-2 2 2 2h7" />
  </Svg>
);

export const StarIcon = (p: IconProps & { filled?: boolean }) => (
  <svg
    width={p.size ?? 18}
    height={p.size ?? 18}
    viewBox="0 0 24 24"
    fill={p.filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinejoin="round"
    className={p.className}
    aria-hidden="true"
  >
    <path d="m12 3.5 2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7L12 3.5z" />
  </svg>
);

export const CompareIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 7h11M15.5 3.5 19 7l-3.5 3.5M16 17H5M8.5 13.5 5 17l3.5 3.5" />
  </Svg>
);

export const ShareIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="17.5" cy="5.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
    <path d="m8.2 10.8 7-4M8.2 13.2l7 4" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v10M8 10.5l4 4 4-4M4.5 19.5h15" />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15.5 15.5 4.5 4.5" />
  </Svg>
);

export const HeartHandIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 9.3S9.8 6.5 7.7 6.5A2.7 2.7 0 0 0 5 9.2c0 2.8 7 6.3 7 6.3s7-3.5 7-6.3a2.7 2.7 0 0 0-2.7-2.7c-2.1 0-4.3 2.8-4.3 2.8z" />
    <path d="M3 19.5c3-1.2 6-1.2 9 0 3-1.2 6-1.2 9 0" />
  </Svg>
);

export const WarnIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4 2.8 19.5h18.4L12 4z" />
    <path d="M12 10v4M12 16.8h.01" />
  </Svg>
);

export const CheckClipboardIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="4.5" width="14" height="16" rx="1.5" />
    <path d="M9.5 4.5V3h5v1.5M8.5 12.5l2.5 2.5 4.5-5" />
  </Svg>
);

export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.6-6.5-10.4a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  </Svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg
    width={p.size ?? 22}
    height={p.size ?? 22}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={p.className}
    aria-hidden="true"
  >
    <path d="M8 5.5v13l11-6.5L8 5.5z" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5" />
  </Svg>
);

export const STAGE_ICONS = {
  "after-ol": PencilExamIcon,
  "after-al": GradCapIcon,
  university: BuildingIcon,
  "non-university": SignpostIcon,
  working: BriefcaseIcon,
  "not-sure": CompassIcon,
} as const;
