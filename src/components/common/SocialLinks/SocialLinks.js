import React from "react";
import "./SocialLinks.scss";

function SocialLinks({ links, className = "" }) {
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Social profiles">
      {links.map(({ label, href, icon, external }) => (
        <li className="social-links__item" key={label}>
          <a
            href={href}
            className="social-links__link"
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            <i className={icon} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
