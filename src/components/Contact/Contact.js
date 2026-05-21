import React from "react";
import classes from "./Contact.module.css";
import useContact from "../../hooks/useContact";

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

  return (
    <div className={classes.Contact} id="contact">
        <div className={classes.cont}>
          <h1 className={classes.header1}>Let's build something useful</h1>
          <p className={classes.subcopy}>
            Have an opportunity, product idea, or collaboration in mind? Send a
            note and I will reply as soon as I can.
          </p>

          <div className={classes.down}>
            <form className={classes.Form} onSubmit={onSubmit}>
              <label className={classes.label} htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className={classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
              <label className={classes.label} htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <label className={classes.label} htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                rows="8"
                placeholder="Tell me a little about what you are building"
                className={classes.textarea}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
              {status && (
                <p
                  className={`${classes.status} ${
                    status.type === "success"
                      ? classes.statusSuccess
                      : classes.statusError
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className={classes.send}
                disabled={!name || !email || !msg || loading}
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>

            <ul className={classes.contactlist}>
              <li className={classes.list}>
                <i
                  className="fa fa-map-marker fa-2x"
                  aria-hidden="true"
                ></i>
                <span className={classes.tag}>Canada</span>
              </li>
              <li className={classes.list}>
                <i
                  className="fa fa-envelope fa-2x"
                  aria-hidden="true"
                ></i>
                <a
                  href="mailto:kabilesh020799@gmail.com"
                  className={classes.tag}
                >
                  kabilesh020799@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className={classes.tiles}>
            <div className="footer-social-icons">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://linkedin.com/in/kabileshravi27/"
                    className="social-icon"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Kabilesh020799"
                    className="social-icon"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.copyright}>
            &copy; {new Date().getFullYear()} All rights reserved
          </div>
        </div>
    </div>
  );
}

export default Contact;
