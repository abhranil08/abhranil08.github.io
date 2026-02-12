import React, { Component } from "react";
import "./ExperienceCard.css";
import { getImageUrl } from "../../utils/imageLoader";

class ExperienceCard extends Component {
  state = { logoError: false };

  getLogoSrc(experience) {
    const hasLocalLogo = experience.logo_path && experience.logo_path.length > 0;
    if (hasLocalLogo) {
      return getImageUrl(experience.logo_path);
    }
    return null;
  }

  handleLogoError = () => this.setState({ logoError: true });

  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const companyInitials = experience.company
      ? experience.company
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map((word) => word.charAt(0))
          .join("")
      : "";
    const logoSrc = this.getLogoSrc(experience);
    const titleParts = experience["title"] && experience["title"].includes(" → ")
      ? experience["title"].split(" → ")
      : null;
    return (
      <div
        className="experience-card"
        style={{ borderLeft: `3px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          {logoSrc && !this.state.logoError ? (
            <img
              className={`experience-card-logo${(experience.logo_path === "myntra_logo.svg" || experience.logo_path === "JadavpurUniversity_Logo.png") ? " experience-card-logo--no-invert" : ""}`}
              src={logoSrc}
              alt=""
              onError={this.handleLogoError}
            />
          ) : (
            <div className="experience-card-logo-fallback">
              {companyInitials}
            </div>
          )}
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              {titleParts ? (
                <div className="experience-card-title-progression" style={{ color: theme.text }}>
                  <span className="experience-card-pill">{titleParts[0].trim()}</span>
                  <span className="experience-card-pill-arrow" aria-hidden="true">→</span>
                  <span className="experience-card-pill">{titleParts[1].trim()}</span>
                </div>
              ) : (
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
              )}
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text }}
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.text }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.text }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <div className="experience-card-description">
            {experience.description.map((sentence) => {
                return (
                  <p className="experience-card-content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
