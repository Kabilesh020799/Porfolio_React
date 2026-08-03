import React from "react";
import "./Home.scss";
import { Link } from "react-scroll";
import profile from "../../assets/profile.webp";
import ResumePdf from "../../assets/Kabilesh27Resume.pdf";
import SocialLinks from "../common/SocialLinks/SocialLinks";
import { socialLinks } from "../../data";

const activateScrollLinkFromKeyboard = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    event.currentTarget.click();
  }
};

function Home() {
  return (
    <section className="home u-text-center" id="home" aria-labelledby="home-title">
        <img
          src={profile}
          className="home__profile"
          alt="Kabilesh Ravichandran"
          width="487"
          height="640"
          decoding="async"
          fetchPriority="high"
        />

        <h1 className="home__heading u-text-center" id="home-title">
          Kabilesh Ravichandran
        </h1>
        <p className="home__subheading">
          Full-stack software engineer building reliable products from
          interface to infrastructure.
        </p>
        <p className="home__intro">
          I design and build reliable full-stack products—from thoughtful user
          experiences to backend systems and production delivery.
        </p>
        <div className="home__actions u-flex u-justify-center u-flex-wrap">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            className="home__primary-action"
            role="button"
            tabIndex={0}
            onKeyDown={activateScrollLinkFromKeyboard}
          >
            View projects
          </Link>
          <a
            href={ResumePdf}
            download="Kabilesh-Ravichandran-Resume.pdf"
            className="home__secondary-action"
          >
            Resume
          </a>
        </div>
        <div className="home__social-wrap">
          <SocialLinks links={socialLinks} className="home__social-list" />
        </div>
        <div className="home__scroll-cue u-text-center u-full-width">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            role="button"
            tabIndex={0}
            aria-label="Continue to About section"
            onKeyDown={activateScrollLinkFromKeyboard}
        >
            <span>
              <svg className="home__scroll-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 16.8 4.6 9.4l1.8-1.8 5.6 5.6 5.6-5.6 1.8 1.8L12 16.8Z" />
              </svg>
            </span>
          </Link>
        </div>
    </section>
  );
}

export default Home;
