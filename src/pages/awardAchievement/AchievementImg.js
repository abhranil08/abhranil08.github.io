import React from "react";
import "./AchievementImg.css";

/**
 * Trophy with subtle glow effect. No container box.
 */
export default function AchievementImg() {
  return (
    <div className="achievement-trophy-wrap" aria-hidden="true">
      <div className="achievement-trophy-inner">
        <span className="achievement-trophy-emoji">🏆</span>
      </div>
    </div>
  );
}
