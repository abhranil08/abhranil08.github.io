import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { greeting, experience } from "../../portfolio";
import ExperienceImg from "../experience/ExperienceImg";
import "./PreviewLayout.css";

class PreviewDark extends Component {
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
          <section className="preview-hero preview-hero--dark">
            <div>
              <div
                className="preview-hero-text-eyebrow"
                style={{ color: "#e0f2fe" }}
              >
                Dark, accent-driven — preview
              </div>
              <h1 className="preview-hero-title" style={{ color: "#f9fafb" }}>
                {greeting.title}
              </h1>
              <p
                className="preview-hero-subtitle"
                style={{ color: "#cbd5f5" }}
              >
                Senior Backend &amp; Data Engineer focused on scalable systems,
                data platforms and ML/AI.
              </p>
              <div className="preview-hero-actions">
                <Button
                  text="View Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <Button
                  text="See experience"
                  href="#preview-experience"
                  theme={theme}
                />
              </div>
              <div className="preview-chip-row">
                <span className="preview-chip preview-chip--accent">Java</span>
                <span className="preview-chip preview-chip--accent">
                  Distributed Systems
                </span>
                <span className="preview-chip preview-chip--accent">
                  Risk &amp; Payments
                </span>
                <span className="preview-chip preview-chip--accent">
                  ML / NLP
                </span>
              </div>
            </div>
            <div className="preview-hero-visual">
              <ExperienceImg theme={theme} />
            </div>
          </section>

          <section className="preview-section" id="preview-experience">
            <div
              className="preview-section-label"
              style={{ color: "#94a3b8" }}
            >
              Experience snapshot
            </div>
            <h2
              className="preview-section-title"
              style={{ color: "#f9fafb" }}
            >
              Timeline-style roles
            </h2>
            <p
              className="preview-section-description"
              style={{ color: "#94a3b8" }}
            >
              On the real page, these cards would sit on a vertical timeline
              with glowing nodes; here&apos;s a compact preview.
            </p>
            <div className="preview-card-grid">
              {featuredExperiences.map((exp, index) => (
                <div
                  className="preview-card preview-card--dark"
                  key={exp.company + exp.title}
                  style={{
                    borderLeft:
                      index === 0
                        ? "2px solid rgba(34, 211, 238, 0.9)"
                        : "1px solid rgba(148, 163, 184, 0.4)",
                  }}
                >
                  <div
                    className="preview-card-title"
                    style={{ color: "#e5e7eb" }}
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

export default PreviewDark;

