import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    const primarySkills = skills.data.filter((s) => s.primary !== false);
    const secondarySkills = skills.data.filter((s) => s.primary === false);
    return (
      <div>
        {primarySkills.map((skill) => (
          <div key={skill.title} className="skills-main-div">
            <div className="skills-left-col">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <Fade left duration={2000}>
                <div className="skills-desc-block">
                  {skill.skills.map((skillSentence, i) => (
                    <p
                      key={i}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </Fade>
            </div>

            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
            </div>
          </div>
        ))}

        {secondarySkills.length > 0 && (
          <div className="skills-secondary-wrap">
            <p className="skills-secondary-label" style={{ color: theme.secondaryText }}>
              Also: Background in {secondarySkills.map((s) => s.title).join(" & ")} (research & internships).
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SkillSection;
