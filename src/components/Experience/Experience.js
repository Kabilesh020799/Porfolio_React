import React, { useState } from "react";
import Card from "./components/card/Card";
import { experience } from "../../data";
import "./Experience.scss";

const groupExperienceByCompany = (items) =>
  items.reduce((groups, item) => {
    const existingGroup = groups.find((group) => group.company === item.company);

    if (existingGroup) {
      existingGroup.roles.push(item);
      existingGroup.startDate = item.startDate;
      return groups;
    }

    return [
      ...groups,
      {
        company: item.company,
        link: item.link,
        startDate: item.startDate,
        endDate: item.endDate,
        roles: [item],
      },
    ];
  }, []);

function Experience() {
  const [showDetailedTimeline, setShowDetailedTimeline] = useState(false);
  const groupedExperience = groupExperienceByCompany(experience).map((group) => ({
    ...group,
    roles: [...group.roles].reverse(),
  }));
  const timelineItems = showDetailedTimeline ? groupedExperience : experience;

  return (
    <div className="experience-wrapper u-grid u-stack-on-tablet u-center-on-tablet u-full-width" id="experience">
        <div className="experience-heading u-flex u-flex-column u-align-start">
          <h2 className="experience-title u-flex u-align-start u-justify-start u-text-left u-text-center-on-tablet">Professional experience</h2>
          <button
            className="experience-view-toggle"
            type="button"
            onClick={() => setShowDetailedTimeline((isDetailed) => !isDetailed)}
            aria-pressed={showDetailedTimeline}
          >
            {showDetailedTimeline ? "Compact view" : "Detailed view"}
          </button>
        </div>
        <div className="experience u-flex u-flex-column u-align-stretch u-center-on-tablet u-full-width">
          {timelineItems?.map((experienceItem) =>
            showDetailedTimeline ? (
              <Card
                key={experienceItem?.company}
                variant="company"
                company={experienceItem?.company}
                startDate={experienceItem?.startDate}
                endDate={experienceItem?.endDate}
                link={experienceItem?.link}
                roles={experienceItem?.roles}
              />
            ) : (
              <Card
                key={`${experienceItem?.company}-${experienceItem?.position}-${experienceItem?.startDate}`}
                variant="role"
                company={experienceItem?.company}
                startDate={experienceItem?.startDate}
                endDate={experienceItem?.endDate}
                link={experienceItem?.link}
                position={experienceItem?.position}
                description={experienceItem?.description}
                techStack={experienceItem?.techStack}
              />
            )
          )}
        </div>
    </div>
  );
}

export default Experience;
