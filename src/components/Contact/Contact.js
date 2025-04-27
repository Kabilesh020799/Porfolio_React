import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

function Contact({ checkedB }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      to_name: name,
      message: msg,
    };

    setLoading(true);

    emailjs
      .send("default_service", "template_yq66kwi", templateParams, {
        publicKey: "asWnA6RSUG2wRoq6n",
      })
      .then(() => {
        alert("Thanks for the submission!");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Fade bottom>
      <div className={classes.Contact} id="contact">
        <div className={classes.cont}>
          <h1 className={classes.header1}>Let's build something amazing</h1>

          <div className={classes.down}>
            <form className={classes.Form} onSubmit={submit}>
              <input
                type="text"
                placeholder="Your Name"
                className={`${classes.input} ${
                  !checkedB ? classes.input_tomato : ""
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`${classes.input} ${
                  !checkedB ? classes.input_tomato : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="8"
                placeholder="Your Message"
                style={{
                  backgroundColor: checkedB ? "#0a192f" : "tomato",
                }}
                className={`${classes.textarea} ${
                  !checkedB ? classes.input_tomato : ""
                }`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />

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
                  style={{ color: "#5C6BC0" }}
                ></i>
                <span className={classes.tag}>Canada</span>
              </li>
              <li className={classes.list}>
                <i
                  className="fa fa-envelope fa-2x"
                  style={{ color: "#5C6BC0" }}
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
                    href="https://facebook.com/ravichandran.kabilesh/"
                    className="social-icon"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/kabilesh_ravichandran/"
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/kabileshravi27/"
                    className="social-icon"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Kabilesh020799"
                    className="social-icon"
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
    </Fade>
  );
}

export default Contact;
