import React from "react";
import "./SoftwareSkill.css";
import { getImageUrl } from "../../utils/imageLoader";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              const color = (logo.style && logo.style.color) || "#64748b";
              const iconStyle = { ...(logo.style || {}), color, fill: color };
              const useLogoImage = logo.logoImage && getImageUrl(logo.logoImage);
              return (
                <li
                  key={logo.skillName}
                  className="software-skill-inline"
                  title={logo.skillName}
                  name={logo.skillName}
                >
                  <span className="software-skill-icon-wrap">
                    {useLogoImage ? (
                      <img
                        src={useLogoImage}
                        alt=""
                        className="software-skill-logo-img"
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={iconStyle}
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
      </div>
    );
  }
}

export default SoftwareSkill;
