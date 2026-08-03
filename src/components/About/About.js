import React from "react";
import "./About.scss";
import { aboutContent } from "../../data";

const renderHighlightedCopy = (copy, highlights) => {
  const pattern = new RegExp(`(${highlights.join("|")})`, "g");

  return copy.split(pattern).map((part, index) =>
    highlights.includes(part) ? (
      <strong className="about__highlight" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    )
  );
};

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
        <div className="about__container u-flex u-stack-on-content u-flex-wrap u-align-start u-center-on-content u-full-width">
          <div className="about__wrapper u-flex u-flex-column u-align-center">
            <h2 className="about__heading u-text-left u-text-center-on-content" id="about-title">Who am I?</h2>
            <div className="about__copy u-text-left u-text-center-on-content">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {renderHighlightedCopy(paragraph, aboutContent.highlights)}
                </p>
              ))}
            </div>
            <section className="about__education u-full-width u-text-left" aria-labelledby="education-title">
              <div className="about__education-header u-flex u-align-center u-justify-between u-flex-wrap">
                <span className="about__education-eyebrow">Education</span>
                <time dateTime="2024-12">{aboutContent.education.graduation}</time>
              </div>
              <h3 id="education-title">{aboutContent.education.degree}</h3>
              <p>
                {aboutContent.education.institution} · {aboutContent.education.location}
              </p>
            </section>
          </div>
        </div>
    </section>
  );
}

export default About;
