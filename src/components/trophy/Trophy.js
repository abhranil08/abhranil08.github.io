import React from "react";
import "./Trophy.css";

const Trophy = ({ count, label }) => {
  return (
    <div className="trophy-wrapper">
      <div className="trophy-container">
        <svg
          className="trophy-icon"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 3C5.44772 3 5 3.44772 5 4V5C5 6.65685 6.34315 8 8 8H8.5C9.32843 8 10 8.67157 10 9.5V16H8C7.44772 16 7 16.4477 7 17V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V17C17 16.4477 16.5523 16 16 16H14V9.5C14 8.67157 14.6716 8 15.5 8H16C17.6569 8 19 6.65685 19 5V4C19 3.44772 18.5523 3 18 3H6Z"
            fill="#6E6E73"
          />
          <rect
            x="9"
            y="18"
            width="6"
            height="2"
            rx="0.5"
            fill="#6E6E73"
          />
        </svg>
      </div>
      <p className="trophy-label">{label}</p>
      <span className="trophy-count">{count}</span>
    </div>
  );
};

export default Trophy;
