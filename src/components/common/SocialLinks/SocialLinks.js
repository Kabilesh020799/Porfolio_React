import React, { memo } from "react";
import "./SocialLinks.scss";

const socialIcons = {
  LinkedIn: (
    <svg className="social-links__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.98H2.82v12.39h4.12V8.98ZM4.88 7.28c1.32 0 2.14-.88 2.14-1.98-.02-1.13-.82-1.98-2.11-1.98-1.3 0-2.15.85-2.15 1.98 0 1.1.82 1.98 2.1 1.98h.02ZM21.24 14.27c0-3.8-2.03-5.57-4.74-5.57-2.18 0-3.16 1.2-3.71 2.04V8.98H8.67c.05 1.16 0 12.39 0 12.39h4.12v-6.92c0-.37.03-.74.14-1 .3-.74.98-1.51 2.12-1.51 1.5 0 2.1 1.14 2.1 2.82v6.61h4.12v-7.1h-.03Z" />
    </svg>
  ),
  GitHub: (
    <svg className="social-links__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 .1 2.61.74 3.26.56.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.08 1.14A10.7 10.7 0 0 1 12 5.92c.95 0 1.9.13 2.79.38 2.13-1.44 3.07-1.14 3.07-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.2-5.08 5.48.4.35.76 1.03.76 2.07v3.46c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  ),
  Email: (
    <svg className="social-links__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.75 5.5h16.5c.96 0 1.75.79 1.75 1.75v9.5c0 .96-.79 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5c0-.96.79-1.75 1.75-1.75Zm.05 2.2v.22l8.2 5.03 8.2-5.03V7.7H3.8Zm16.4 8.83v-6.2l-7.55 4.63a1.25 1.25 0 0 1-1.3 0L3.8 10.33v6.2h16.4Z" />
    </svg>
  ),
};

function SocialLinks({ links, className = "" }) {
  return (
    <ul
      className={`social-links u-flex u-flex-wrap u-align-center u-justify-center u-list-reset ${className}`.trim()}
      aria-label="Social profiles"
    >
      {links.map(({ label, href, external }) => (
        <li className="social-links__item u-flex" key={label}>
          <a
            href={href}
            className="social-links__link"
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            {socialIcons[label]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(SocialLinks);
