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
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-facebook ls"></i>
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-twitter ls"></i>
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-rss ls"></i>
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-youtube ls"></i>
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-linkedin ls"></i>
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa fa-github ls"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
