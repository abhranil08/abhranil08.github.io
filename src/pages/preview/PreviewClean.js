import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, experience } from "../../portfolio";
import FeelingProud from "../../containers/greeting/FeelingProud";
import "./PreviewLayout.css";

class PreviewClean extends Component {
  render() {
    const theme = this.props.theme;

    const primaryWorkSection =
      experience.sections && experience.sections.length
        ? experience.sections[0]
        : null;

    const featuredExperiences = primaryWorkSection
      ? primaryWorkSection.experiences.slice(0, 3)
      : [];

    return (
      <div className="preview-page">
        <Header theme={theme} />
        <main className="preview-main">
          <section className="preview-hero preview-hero--clean">
            <div>
              <div className="preview-hero-text-eyebrow">
                Clean minimal landing — preview
              </div>
              <h1
                className="preview-hero-title"
                style={{ color: theme.text }}
              >
                {greeting.title}
              </h1>
              <p
                className="preview-hero-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="preview-hero-actions">
                <Button
                  text="View Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <Button
                  text="View Experience"
                  href="#preview-experience"
                  theme={theme}
                />
              </div>
              <div className="preview-hero-secondary">
                <SocialMedia theme={theme} />
              </div>
            </div>
            <div className="preview-hero-visual">
              <FeelingProud theme={theme} />
            </div>
          </section>

          <section className="preview-section" id="preview-experience">
            <div className="preview-section-label">Experience snapshot</div>
            <h2
              className="preview-section-title"
              style={{ color: theme.text }}
            >
              Recent roles
            </h2>
            <p className="preview-section-description">
              A quick, card-first view of your work history in a clean, light
              layout. On the real page, this section would expand into a full
              experience timeline.
            </p>
            <div className="preview-card-grid">
              {featuredExperiences.map((exp) => (
                <div className="preview-card" key={exp.company + exp.title}>
                  <div
                    className="preview-card-title"
                    style={{ color: theme.text }}
                  >
                    {exp.title}
                  </div>
                  <div className="preview-card-meta">
                    {exp.company} • {exp.duration}
                  </div>
                  <div className="preview-card-location">{exp.location}</div>
                  {Array.isArray(exp.description) &&
                    exp.description.length > 0 && (
                      <div className="preview-card-desc">
                        {exp.description[0]}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default PreviewClean;

