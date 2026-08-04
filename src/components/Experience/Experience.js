import React, { useMemo } from "react";
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
  const groupedExperience = useMemo(
    () =>
      groupExperienceByCompany(experience).map((group) => ({
        ...group,
        roles: [...group.roles].reverse(),
      })),
    []
  );

  return (
    <section
      className="experience-wrapper u-grid u-stack-on-tablet u-center-on-tablet u-full-width"
      id="experience"
      aria-labelledby="experience-title"
    >
        <div className="experience-heading u-flex u-flex-column u-align-start">
          <h2 className="experience-title u-flex u-align-start u-justify-start u-text-left u-text-center-on-tablet" id="experience-title">Professional experience</h2>
        </div>
        <div className="experience u-flex u-flex-column u-align-stretch u-center-on-tablet u-full-width">
          {groupedExperience.map((experienceItem) => (
            <Card
              key={experienceItem.company}
              variant="company"
              company={experienceItem.company}
              startDate={experienceItem.startDate}
              endDate={experienceItem.endDate}
              link={experienceItem.link}
              roles={experienceItem.roles}
            />
          ))}
        </div>
    </section>
  );
}

export default Experience;
