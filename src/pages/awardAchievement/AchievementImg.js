import React from "react";
import "./AchievementImg.css";

/**
 * Trophy with subtle blue glow – no container box, just icon and aura.
 */
export default function AchievementImg() {
  return (
    <div className="achievement-trophy-wrap" aria-hidden="true">
      <div className="achievement-trophy-inner">
        <span className="achievement-trophy-icon" aria-hidden="true">
          🏆
        </span>
      </div>
    </div>
  );
}
