import React, { Component } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const sections = this.props.sections || [];
    let cardIndex = 0;
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
                section.experiences.map((experience) => {
                  const fromLeft = cardIndex % 2 === 0;
                  cardIndex += 1;
                  return (
                    <Fade
                      key={`${section.title}-${experience.company}-${experience.title}`}
                      left={fromLeft}
                      right={!fromLeft}
                      duration={fromLeft ? 2000 : 1000}
                      distance="120px"
                    >
                      <div className="experience-card-wrap">
                        <ExperienceCard
                          experience={experience}
                          theme={theme}
                        />
                      </div>
                    </Fade>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
