import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import { certificationsAwards } from "../../portfolio";
import "./AwardAchievementComponent.css";
import { Fade } from "react-reveal";
import AwardAchievements from "../../containers/awardAchivement/AwardAchievements";

class AwardAchievement extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img
									src={require("../../assests/images/achievement-award-medal.png")}
									alt=""
								/> 
              </div>
              <div className="heading-text-div">
                <AwardAchievements theme={this.props.theme} />
                {certificationsAwards.certifications.length > 0 ? (
                <Certifications theme={this.props.theme} />
          ) : null}
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default AwardAchievement;
