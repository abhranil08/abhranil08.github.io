import React, { Component } from "react";
import "./AwardAchievementCard.css";
import { Fade, Flip } from "react-reveal";
import { getImageUrl } from "../../utils/imageLoader";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    const logoUrl = degree.logo_path ? getImageUrl(degree.logo_path) : null;
    return (
      <div className="degree-card">
        <div className="degree-card-inner">
          <div
            className="card-accent"
            style={degree.accentColor ? { background: degree.accentColor } : undefined}
          />
          {logoUrl && (
            <Flip left duration={2000}>
              <div className="card-img">
                <img
                  src={logoUrl}
                  alt={degree.alt_name || degree.title}
                  className={degree.logo_path === "JadavpurUniversity_Logo.png" ? "card-img__img--no-invert" : undefined}
                />
              </div>
            </Flip>
          )}
          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div className="body-header">
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                    {degree.title}
                  </h2>
                  {degree.subtitle && (
                    <h3 className="card-subtitle" style={{ color: theme.secondaryText }}>
                      {degree.subtitle}
                    </h3>
                  )}
                </div>
                {degree.duration && (
                  <div className="body-header-duration">
                    <h3 className="duration" style={{ color: theme.secondaryText }}>
                      {degree.duration}
                    </h3>
                  </div>
                )}
              </div>
              <div className="body-content">
                {degree.descriptions.map((sentence, i) => (
                  <p key={i} className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                ))}
                {degree.website_link && (
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="visually-hidden">Visit website</span>
                  </a>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default DegreeCard;
