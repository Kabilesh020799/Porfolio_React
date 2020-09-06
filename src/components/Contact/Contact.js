import React from "react";
import Fade from "react-reveal/Fade";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <Fade left>
      <div className={classes.Contact} id="contact">
        <div className={classes.cont}>
          <h1 className={classes.header1}>CONTACT</h1>
          <div className={classes.down}>
            <form className={classes.Form}>
              <input
                type="text"
                placeholder="NAME"
                className={classes.input}
                value=""
              />
              <input
                type="email"
                placeholder="E-MAIL"
                className={classes.input}
                value=""
              />
              <textarea
                rows="10"
                placeholder="MESSAGE"
                className={classes.textarea}
              />
              <button className={classes.send}>SEND</button>
            </form>
            <ul className={classes.contactlist}>
              <li className={classes.list}>
                <i
                  class="fa fa-map-marker fa-2x"
                  style={{ color: "#327D7A" }}
                  className={classes.icon}
                ></i>
                <span className={classes.tag}>
                  Chennai | TamilNaduu | INDIA
                </span>
              </li>
              <li className={classes.list}>
                <i
                  class="fa fa-phone fa-2x"
                  style={{ color: "#327D7A" }}
                  className={classes.icon}
                ></i>
                <a
                  href="tel:8056609157"
                  className={classes.tag}
                  title="Give me a call"
                >
                  <span className={classes.tag}>8056609157</span>
                </a>
              </li>
              <li className={classes.list}>
                <i
                  class="fa fa-envelope fa-2x"
                  style={{ color: "#327D7A" }}
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
