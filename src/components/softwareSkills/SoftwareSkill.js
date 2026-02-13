import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
              const tooltip = (
                <Tooltip id={`tooltip-${logo.skillName}`} className="software-skill-tooltip">
                  {logo.skillName}
                </Tooltip>
              );
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement="top"
                  overlay={tooltip}
                  delay={{ show: 80, hide: 0 }}
                >
                  <li
                    className="software-skill-inline"
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
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
