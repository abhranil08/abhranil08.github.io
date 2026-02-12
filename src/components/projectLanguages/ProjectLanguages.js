import React, { Component } from "react";
import "./ProjectLanguages.css";
import { getImageUrl } from "../../utils/imageLoader";

class ProjectLanguages extends Component {
  render() {
    return (
      <div className={`project-languages-wrap ${this.props.className || ""}`.trim()}>
        <ul className="dev-icons-languages">
          {this.props.logos.map((logo) => {
            const useLogoImage = logo.logoImage && getImageUrl(logo.logoImage);
            const needsInvertInDark = logo.name === "MongoDB";
              return (
              <li
                key={logo.name}
                className={`software-skill-inline-languages${needsInvertInDark ? " lang-icon--needs-invert" : ""}`}
                title={logo.name}
              >
                <span className="software-skill-lang-icon-wrap">
                  {useLogoImage ? (
                    <img
                      src={useLogoImage}
                      alt=""
                      className="software-skill-lang-logo-img"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectLanguages;
