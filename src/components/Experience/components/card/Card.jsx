import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const {
    company,
    startDate,
    endData,
    link,
    roles,
  } = props;

  const [expanded, setExpanded] = useState(roles?.length > 1);
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
    <article className={`card ${expanded ? "card-expanded" : ""}`}>
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className="card-date">{startDate} - {endData}</div>
      <div className="card-details">
        <div className="card-company-row">
          <div>
            <h2 className="card-company">{company}</h2>
            <div className="milestone-meta">
              <span>{roleCount} {roleCount === 1 ? "role" : "roles"}</span>
              {roleCount > 1 && <span>Career progression</span>}
            </div>
          </div>
          <div className="card-actions">
            <button
              className="expand-button"
              type="button"
              onClick={() => setExpanded((isExpanded) => !isExpanded)}
              aria-expanded={expanded}
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
            <p className="card-description">{summaryDescription}</p>
            <div className="card-labels">
              {uniqueTechStack.map((techStackItem) => (
                <div className="card-label" key={techStackItem}>
                  {techStackItem}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`role-list ${expanded ? "show-roles" : ""}`}>
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
                <p className="card-description">{role.description}</p>
                <div className="card-labels">
                  {role.techStack?.map((techStackItem) => (
                    <div className="card-label" key={techStackItem}>
                      {techStackItem}
                    </div>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
