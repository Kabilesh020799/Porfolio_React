import React from "react";
import "./Contact.scss";
import useContact from "../../hooks/useContact";
import SocialLinks from "../common/SocialLinks/SocialLinks";
import { socialLinks } from "../../data";

const contactFields = [
  {
    id: "contact-name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    valueKey: "name",
  },
  {
    id: "contact-email",
    label: "Email",
    type: "email",
    placeholder: "Your email",
    autoComplete: "email",
    valueKey: "email",
  },
];

const contactSocialLinks = socialLinks.filter(({ label }) => label !== "Email");

const LocationIcon = () => (
  <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.75a7.25 7.25 0 0 0-7.25 7.25c0 5.1 6.35 10.86 6.62 11.1.36.32.9.32 1.26 0 .27-.24 6.62-6 6.62-11.1A7.25 7.25 0 0 0 12 2.75Zm0 10.1A2.85 2.85 0 1 1 12 7.15a2.85 2.85 0 0 1 0 5.7Z" />
  </svg>
);

const MailIcon = () => (
  <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.75 5.5h16.5c.96 0 1.75.79 1.75 1.75v9.5c0 .96-.79 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5c0-.96.79-1.75 1.75-1.75Zm.05 2.2v.22l8.2 5.03 8.2-5.03V7.7H3.8Zm16.4 8.83v-6.2l-7.55 4.63a1.25 1.25 0 0 1-1.3 0L3.8 10.33v6.2h16.4Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.94 8.98H2.82v12.39h4.12V8.98ZM4.88 7.28c1.32 0 2.14-.88 2.14-1.98-.02-1.13-.82-1.98-2.11-1.98-1.3 0-2.15.85-2.15 1.98 0 1.1.82 1.98 2.1 1.98h.02ZM21.24 14.27c0-3.8-2.03-5.57-4.74-5.57-2.18 0-3.16 1.2-3.71 2.04V8.98H8.67c.05 1.16 0 12.39 0 12.39h4.12v-6.92c0-.37.03-.74.14-1 .3-.74.98-1.51 2.12-1.51 1.5 0 2.1 1.14 2.1 2.82v6.61h4.12v-7.1h-.03Z" />
  </svg>
);

function Contact() {
  const {
    name,
    setName,
    email,
    setEmail,
    msg,
    setMsg,
    loading,
    status,
    onSubmit,
  } = useContact();
  const formState = {
    name: { value: name, setValue: setName },
    email: { value: email, setValue: setEmail },
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__container u-full-width">
          <h2 className="contact__heading u-text-center" id="contact-title">Let's build something useful</h2>
          <p className="contact__subcopy u-muted-copy">
            Have an opportunity, product idea, or collaboration in mind? Send a
            note and I will reply as soon as I can.
          </p>

          <div className="contact__primary-links u-flex u-flex-wrap u-justify-center">
            <a
              href="mailto:kabilesh020799@gmail.com"
              className="contact__primary-link contact__primary-link--email u-flex u-align-center"
            >
              <MailIcon />
              <span>
                <strong>Email me</strong>
                <small>kabilesh020799@gmail.com</small>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/kabileshravi27/"
              target="_blank"
              rel="noreferrer"
              className="contact__primary-link u-flex u-align-center"
            >
              <LinkedInIcon />
              <span>
                <strong>Connect on LinkedIn</strong>
                <small>Kabilesh Ravichandran</small>
              </span>
            </a>
          </div>

          <div className="contact__content u-grid u-full-width">
            <form className="contact__form u-flex u-flex-column u-full-width" onSubmit={onSubmit}>
              {contactFields.map((field) => (
                <React.Fragment key={field.id}>
                  <label className="contact__label u-text-left" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="contact__input"
                    value={formState[field.valueKey].value}
                    onChange={(event) =>
                      formState[field.valueKey].setValue(event.target.value)
                    }
                    autoComplete={field.autoComplete}
                    required
                  />
                </React.Fragment>
              ))}
              <label className="contact__label u-text-left" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                rows="8"
                placeholder="Tell me a little about what you are building"
                className="contact__textarea"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
              {status && (
                <p
                  className={`contact__status u-full-width u-text-left ${
                    status.type === "success"
                      ? "contact__status--success"
                      : "contact__status--error"
                  }`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="contact__send"
                disabled={!name || !email || !msg || loading}
              >
                {loading ? "Sending…" : "Send message"}
              </button>
            </form>

            <ul className="contact__list u-grid u-full-width">
              <li className="contact__list-item u-flex u-align-center">
                <LocationIcon />
                <span className="contact__tag">Halifax, Canada</span>
              </li>
            </ul>
          </div>

          <div className="contact__socials">
            <SocialLinks
              links={contactSocialLinks}
              className="contact__social-list"
            />
          </div>

          <div className="contact__copyright u-text-center">
            &copy; {new Date().getFullYear()} Kabilesh Ravichandran
          </div>
        </div>
    </section>
  );
}

export default Contact;
