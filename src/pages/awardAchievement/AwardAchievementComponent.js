import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import { certificationsAwards } from "../../portfolio";
import "./AwardAchievementComponent.css";
import { Fade } from "react-reveal";
import AwardAchievements from "../../containers/awardAchivement/AwardAchievements";
import AchievementImg from "./AchievementImg";

class AwardAchievement extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div achievement-heading">
              <div className="heading-img-div achievement-img-wrap">
                <AchievementImg theme={theme} />
              </div>
              <div className="heading-text-div achievement-content-wrap">
                <AwardAchievements theme={theme} />
                {certificationsAwards.certifications.length > 0 ? (
                  <Certifications theme={theme} />
                ) : null}
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default AwardAchievement;
