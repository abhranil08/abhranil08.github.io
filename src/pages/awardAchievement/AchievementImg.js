import React from "react";

/**
 * Sports-style trophy for Extracurriculars / Achievements. Theme-aware.
 */
export default function AchievementImg({ theme }) {
  const isDark = theme && theme.body && theme.body.includes("020617");
  const fill = isDark ? "#94a3b8" : "#7d56c2";
  const fillDark = isDark ? "rgba(30, 41, 59, 0.5)" : "rgba(124, 86, 194, 0.2)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 260"
      width="100%"
      height="auto"
      style={{ maxWidth: "260px" }}
      aria-hidden="true"
    >
      {/* Top ball / finial */}
      <circle cx="100" cy="22" r="10" fill={fill} />
      {/* Main cup – tall chalice shape (narrower, not wide like a coffee cup) */}
      <path
        fill={fill}
        d="M 100 34 L 72 34 L 66 42 Q 58 58 58 78 Q 58 98 68 114 L 100 132 L 132 114 Q 142 98 142 78 Q 142 58 134 42 Z"
      />
      {/* Rim / lip */}
      <path fill={fillDark} d="M 68 38 L 132 38 L 130 42 L 70 42 Z" />
      {/* Left handle */}
      <path
        fill="none"
        stroke={fill}
        strokeWidth="9"
        strokeLinecap="round"
        d="M 72 52 Q 38 52 38 82 Q 38 108 72 108"
      />
      {/* Right handle */}
      <path
        fill="none"
        stroke={fill}
        strokeWidth="9"
        strokeLinecap="round"
        d="M 128 52 Q 162 52 162 82 Q 162 108 128 108"
      />
      {/* Stem */}
      <rect x="90" y="114" width="20" height="36" rx="2" fill={fill} />
      {/* Base – top step */}
      <rect x="75" y="150" width="50" height="10" rx="3" fill={fill} />
      {/* Base – bottom step (wider) */}
      <rect x="62" y="160" width="76" height="14" rx="4" fill={fill} />
    </svg>
  );
}
