import React from "react";
import { skills } from "../../portfolio";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">Full-stack development and data science</p>

        <div className="skills-grid">
          {skills.data.map((skill) => (
            <div key={skill.title} className="skill-card">
              <h3>{skill.title}</h3>
              <ul>
                {skill.skills.map((item, i) => (
                  <li key={i}>{item.replace(/^⚡\s*/, "")}</li>
                ))}
              </ul>
              <div className="skill-logos">
                {(skill.softwareSkills || []).slice(0, 8).map((s, i) => (
                  <span key={i} className="skill-logo-name">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
