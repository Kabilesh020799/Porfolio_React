import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import classes from "./Contact.module.css";
import emailjs from "emailjs-com";

function Contact({ checkedB }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (name && email && msg) {
      setEmpty(false);
    }
  }, [name, email, msg]);

  const submit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: email,
      to_name: name,
      message: msg,
    };
    emailjs
      .send(
        "default_service",
        "template_a8oyhen",
        templateParams,
        "user_mwBwu7UjglI9ydLfin6Wf"
      )
      .then((res) => prompt("Thanks for the submission"))
      .catch((err) => console.log(err));
    setEmail("");
    setMsg("");
    setName("");
  };
  return (
    <Fade bottom>
      <div className={classes.Contact} id="contact">
        <div className={classes.cont}>
          <h1 className={classes.header1}>CONTACT</h1>
          <div className={classes.down}>
            <form className={classes.Form}>
              <input
                type="text"
                placeholder="NAME"
                className={`${classes.input} ${
                  !checkedB ? classes.input_tomato : null
                }`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="E-MAIL"
                className={`${classes.input} ${
                  !checkedB ? classes.input_tomato : null
                }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                rows="10"
                placeholder="MESSAGE"
                style={
                  checkedB
                    ? { backgroundColor: "#0a192f" }
                    : { backgroundColor: "tomato" }
                }
                className={`${classes.textarea} ${
                  !checkedB ? classes.input_tomato : null
                }`}
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
              <button
                className={classes.send}
                onClick={submit}
                disabled={empty}
              >
                SEND
              </button>
            </form>
            <ul className={classes.contactlist}>
              <li className={classes.list}>
                <i
                  class="fa fa-map-marker fa-2x"
                  style={{ color: "#47D16E" }}
                  className={classes.icon}
                ></i>
                <span className={classes.tag}>HALIFAX | NOVA SCOTIA | CANADA</span>
              </li>
              <li className={classes.list}>
                <i
                  class="fa fa-envelope fa-2x"
                  style={{ color: "#47D16E" }}
                  className={classes.icon}
                ></i>
                <a
                  href="mailto:kabilesh020799@gmail.com"
                  title="Send me an email"
                  className={classes.tag}
                >
                  <span className={classes.tag}> kabilesh020799@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.tiles}>
            <div class="footer-social-icons">
              <ul class="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/ravichandran.kabilesh/"
                    class="social-icon"
                  >
                    {" "}
                    <i class="fa fa-facebook ls"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kabilesh_ravichandran/"
                    class="social-icon"
                  >
                    {" "}
                    <i class="fab fa-instagram ls"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kabileshravi27/"
                    class="social-icon"
                  >
                    {" "}
                    <i class="fa fa-linkedin ls"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Kabilesh020799"
                    class="social-icon"
                  >
                    {" "}
                    <i class="fa fa-github ls"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/itsmekabilesh"
                    class="social-icon"
                  >
                    {" "}
                    <i class="fab fa-hackerrank ls"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.copyright}>
            &copy; ALL OF THE RIGHTS RESERVED
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
