import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./AwardAchievementComponent.css";
import { Fade } from "react-reveal";
import AwardAchievements from "../../containers/awardAchivement/AwardAchievements";
import AchievementImg from "./AchievementImg";

class AwardAchievement extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main achievements-main achievements-outer-container">
        <Header theme={theme} />
        <div className="basic-education">
          {/* A. Hero: trophy left (200px), title + description right, glass */}
          <Fade bottom duration={2000} distance="40px">
            <div className="achievements-hero heading-div">
              <div className="achievements-hero-img-wrap">
                <AchievementImg theme={theme} />
              </div>
              <div className="achievements-hero-text">
                <h1 className="achievements-hero-title" style={{ color: theme.text }}>
                  Achievements
                </h1>
                <p className="achievements-hero-desc" style={{ color: theme.secondaryText }}>
                  Extracurriculars & milestones.
                </p>
              </div>
            </div>
          </Fade>

          {/* Content: Extracurriculars cards */}
          <div className="achievement-content-wrap">
            <AwardAchievements theme={theme} />
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default AwardAchievement;
