import React, { Component } from "react";
import "./AwardAchievements.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { awardsAndAchivements } from "../../portfolio";
import { Fade } from "react-reveal";

class AwardAchievement extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Extracurriculars
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {awardsAndAchivements.awardsAndAchivements.map((awardsAndAchivements) => {
            return <DegreeCard degree ={awardsAndAchivements} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default AwardAchievement;
