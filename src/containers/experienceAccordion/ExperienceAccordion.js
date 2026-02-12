import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const sections = this.props.sections || [];
    return (
      <div className="experience-accord">
        {sections.map((section) => (
          <section className="experience-section" key={section.title}>
            <div className="experience-section-header">
              <h2
                className="experience-section-title"
                style={{ color: theme.text }}
              >
                {section.title}
              </h2>
              <div className="experience-section-line" />
            </div>
            <div className="experience-section-grid">
              {section.experiences &&
                section.experiences.map((experience) => (
                  <ExperienceCard
                    key={`${section.title}-${experience.company}-${experience.title}`}
                    experience={experience}
                    theme={theme}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
