import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { greeting, experience } from "../../portfolio";
import "./PreviewLayout.css";

class PreviewStory extends Component {
  render() {
    const theme = this.props.theme;

    const workSection =
      experience.sections &&
      experience.sections.find((section) => section.title === "Work");
    const researchSection =
      experience.sections &&
      experience.sections.find((section) => section.title === "Research");
    const sportsSection =
      experience.sections &&
      experience.sections.find((section) => section.title === "Volunteerships");

    const currentRole =
      workSection && workSection.experiences
        ? workSection.experiences[0]
        : null;

    return (
      <div className="preview-page">
        <Header theme={theme} />
        <main className="preview-main">
          <section className="preview-hero preview-hero--story">
            <div>
              <div className="preview-hero-text-eyebrow">
                Storytelling layout — preview
              </div>
              <h1
                className="preview-hero-title"
                style={{ color: theme.text }}
              >
                Senior engineer with a research &amp; sports background
              </h1>
              <p
                className="preview-hero-subtitle"
                style={{ color: theme.secondaryText }}
              >
                From elite cricket and athletics to research in NLP / CV and
                building large-scale systems at Paytm and Goldman Sachs.
              </p>
              <div className="preview-hero-actions">
                <Button
                  text="View Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <Button
                  text="See story chapters"
                  href="#preview-chapters"
                  theme={theme}
                />
              </div>
            </div>
          </section>

          <section className="preview-section" id="preview-chapters">
            <div className="preview-section-label">Chapters</div>
            <h2
              className="preview-section-title"
              style={{ color: theme.text }}
            >
              How your story unfolds
            </h2>

            <div className="preview-band">
              <div className="preview-band-heading">
                Chapter 1 — Engineering career
              </div>
              <div className="preview-band-body">
                {currentRole ? (
                  <>
                    At <strong>{currentRole.company}</strong> as{" "}
                    <strong>{currentRole.title}</strong> (
                    {currentRole.duration}
                    ), you work on{" "}
                    {Array.isArray(currentRole.description) &&
                    currentRole.description.length > 0
                      ? currentRole.description[0].toLowerCase()
                      : "high-impact backend and data problems"}{" "}
                    while owning systems that impact thousands of merchants.
                  </>
                ) : (
                  <>
                    This chapter focuses on your current and past engineering
                    roles, turning bullet lists into concise, outcome-focused
                    stories.
                  </>
                )}
              </div>
            </div>

            {researchSection && (
              <div className="preview-band">
                <div className="preview-band-heading">Chapter 2 — Research</div>
                <div className="preview-band-body">
                  We&apos;ll highlight your work in{" "}
                  {researchSection.experiences
                    .map((exp) => exp.company)
                    .join(" & ")}
                  , focusing on NLP, computer vision and deep learning, with
                  clear tags and impact rather than only dense paragraphs.
                </div>
              </div>
            )}

            {sportsSection && (
              <div className="preview-band">
                <div className="preview-band-heading">
                  Chapter 3 — Sports &amp; leadership
                </div>
                <div className="preview-band-body">
                  This band showcases your cricket, athletics and leadership
                  achievements as a differentiating narrative, instead of a long
                  bullet list hidden in a separate section.
                </div>
              </div>
            )}
          </section>
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default PreviewStory;

