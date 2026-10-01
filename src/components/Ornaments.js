import { useId } from "react";

const tones = {
  white: { light: "#ffffff", mid: "#e4e9ff", dark: "#aab6ee" },
  lime: { light: "#eeff8f", mid: "#c8f31d", dark: "#8db300" },
};

function Svg({ className = "", children }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`pointer-events-none drop-shadow-[0_14px_16px_rgba(0,0,60,0.28)] ${className}`}
    >
      {children}
    </svg>
  );
}

function Ribbon({ d, w, tone, className }) {
  const t = tones[tone];
  return (
    <Svg className={className}>
      <path d={d} stroke={t.dark} strokeWidth={w} transform="translate(4 6)" />
      <path d={d} stroke={t.mid} strokeWidth={w} />
      <path
        d={d}
        stroke={t.light}
        strokeWidth={w * 0.28}
        transform="translate(-3 -3)"
        opacity=".85"
      />
    </Svg>
  );
}

export function Squiggle({ tone = "white", className }) {
  return (
    <Ribbon
      tone={tone}
      w={24}
      className={className}
      d="M35 50 C95 5 170 20 150 58 C130 95 40 80 42 120 C44 160 140 135 165 172"
    />
  );
}

export function Spiral({ tone = "white", className }) {
  return (
    <Ribbon
      tone={tone}
      w={16}
      className={className}
      d="M100 45 C45 45 30 115 90 128 C150 140 168 60 112 68 C75 74 72 112 100 108"
    />
  );
}

export function Ring({ tone = "white", className }) {
  const id = useId().replace(/:/g, "");
  const t = tones[tone];
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.light} />
          <stop offset=".6" stopColor={t.mid} />
          <stop offset="1" stopColor={t.dark} />
        </linearGradient>
      </defs>
      <g transform="rotate(-25 100 100)">
        <ellipse
          cx="104"
          cy="110"
          rx="68"
          ry="50"
          stroke={t.dark}
          strokeWidth="38"
          opacity=".55"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="68"
          ry="50"
          stroke={`url(#${id})`}
          strokeWidth="38"
        />
        <ellipse
          cx="96"
          cy="90"
          rx="68"
          ry="50"
          stroke={t.light}
          strokeWidth="6"
          opacity=".8"
          strokeDasharray="130 400"
        />
      </g>
    </Svg>
  );
}

export function Cone({ tone = "white", className }) {
  const id = useId().replace(/:/g, "");
  const t = tones[tone];
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={t.light} />
          <stop offset=".55" stopColor={t.mid} />
          <stop offset="1" stopColor={t.dark} />
        </linearGradient>
      </defs>
      <path
        d="M100 16 L160 150 A60 24 0 0 1 40 150 Z"
        fill={`url(#${id})`}
        stroke={t.mid}
        strokeWidth="8"
      />
    </Svg>
  );
}

export function Cylinder({ tone = "white", className }) {
  const id = useId().replace(/:/g, "");
  const t = tones[tone];
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={t.light} />
          <stop offset=".5" stopColor={t.mid} />
          <stop offset="1" stopColor={t.dark} />
        </linearGradient>
      </defs>
      <path d="M42 48 V150 A58 22 0 0 0 158 150 V48 Z" fill={`url(#${id})`} />
      <ellipse cx="100" cy="48" rx="58" ry="22" fill={t.light} />
      <ellipse
        cx="100"
        cy="48"
        rx="58"
        ry="22"
        stroke={t.dark}
        strokeWidth="2"
        opacity=".3"
      />
    </Svg>
  );
}
