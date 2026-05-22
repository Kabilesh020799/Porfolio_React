import React, { useId, useState } from "react";
import "./Card.scss";
import TechList from "../../../common/TechList/TechList";

const Card = (props) => {
  const {
    company,
    startDate,
    endData,
    link,
    roles,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const roleListId = useId();
  const roleCount = roles?.length || 0;
  const firstRole = roles?.[0];
  const latestRole = roles?.[roles.length - 1];
  const uniqueTechStack = [
    ...new Set(roles?.flatMap((role) => role.techStack || []) || []),
  ].slice(0, 8);
  const roleTitles =
    roleCount > 1
      ? roles?.map((role) => role.position).join(" to ")
      : latestRole?.position;
  const summaryDescription =
    roleCount > 1
      ? roles
          ?.map(
            (role) =>
              `${role.position}: ${role.description.split(".")[0].trim()}.`
          )
          .join(" ")
      : latestRole?.description;

  return (
    <article className={`card u-flex u-stack-on-tablet u-text-left u-full-width ${expanded ? "card-expanded" : ""}`}>
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className="card-date">{startDate} - {endData}</div>
      <div className="card-details u-flex u-flex-column">
        <div className="card-company-row u-flex u-stack-on-mobile u-align-start u-justify-between">
          <div>
            <h2 className="card-company">{company}</h2>
            <div className="milestone-meta u-flex u-flex-wrap">
              <span>{roleCount} {roleCount === 1 ? "role" : "roles"}</span>
              {roleCount > 1 && <span>Career progression</span>}
            </div>
          </div>
          <div className="card-actions u-flex u-flex-wrap u-justify-end u-justify-start-on-mobile">
            <button
              className="expand-button"
              type="button"
              onClick={() => setExpanded((isExpanded) => !isExpanded)}
              aria-expanded={expanded}
              aria-controls={roleListId}
              aria-label={`${expanded ? "Collapse" : "Show"} ${company} role details`}
            >
              {expanded ? "Collapse" : "Details"}
            </button>
            <a
              className="company-link"
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${company}`}
            >
              Visit
            </a>
          </div>
        </div>

        {!expanded && latestRole && (
          <div className="milestone-summary">
            <div className="role-meta">
              {firstRole?.startDate} - {latestRole?.endDate}
            </div>
            <h3 className="card-position">{roleTitles}</h3>
            <p className="card-description u-text-left">{summaryDescription}</p>
            <TechList items={uniqueTechStack} className="card-labels" />
          </div>
        )}

        <div
          className={`role-list u-flex u-flex-column ${expanded ? "show-roles" : ""}`}
          id={roleListId}
        >
          {expanded &&
            roles?.map((role) => (
              <section
                className="role"
                key={`${role.position}-${role.startDate}`}
              >
                <div className="role-meta">
                  {role.startDate} - {role.endDate}
                </div>
                <h3 className="card-position">{role.position}</h3>
                <p className="card-description u-text-left">{role.description}</p>
                <TechList items={role.techStack} className="card-labels" />
              </section>
            ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
