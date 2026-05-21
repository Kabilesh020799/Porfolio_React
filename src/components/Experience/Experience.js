import React from "react";
import Card from "./components/card/Card";
import { experience } from "../../data";
import "./Experience.css";

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
  const groupedExperience = groupExperienceByCompany(experience).map((group) => ({
    ...group,
    roles: [...group.roles].reverse(),
  }));

  return (
    <div className="experience-wrapper" id="experience">
        <h1>Professional experience</h1>
        <div className="experience">
          {groupedExperience?.map((experienceItem) => (
            <Card
              key={experienceItem?.company}
              company={experienceItem?.company}
              startDate={experienceItem?.startDate}
              endData={experienceItem?.endDate}
              link={experienceItem?.link}
              roles={experienceItem?.roles}
            />
          ))}
        </div>
    </div>
  );
}

export default Experience;
