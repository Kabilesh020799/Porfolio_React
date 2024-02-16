import React from "react";
import Fade from "react-reveal/Fade";
import Card from "./components/card/Card";
import experience from "./constant";
import './Experience.css'

function Experience() {
  return (
    <Fade bottom>
      <div className="experience-wrapper">
        <h1>Have a look at my experiences!!</h1>
        <div className="experience">
          {
            experience?.map((experienceItem) => (
              <Card
                position={experienceItem?.position}
                company={experienceItem?.company}
                startDate={experienceItem?.startDate}
                endData={experienceItem?.endDate}
                description={experienceItem?.description}
                techStack={experienceItem?.techStack}
                link={experienceItem?.link}
              />
            ))
          }
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
