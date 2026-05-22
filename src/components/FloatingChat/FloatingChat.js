import React, { useMemo, useState } from "react";
import "./FloatingChat.scss";

const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "kabilesh020799@gmail.com";
const SMS_PHONE_NUMBER = process.env.REACT_APP_SMS_PHONE_NUMBER || "";
const DEFAULT_MESSAGE =
  "Hi Kabilesh, I found your portfolio and would like to connect.";

const MessageIcon = () => (
  <svg className="floating-chat__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 17.25 15H9.4l-4.2 3.5A.75.75 0 0 1 4 17.93V5.25Zm2.25-.75a.75.75 0 0 0-.75.75v11.08l2.65-2.2a.75.75 0 0 1 .48-.18h8.12a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H6.75Z" />
  </svg>
);

const SmsIcon = () => (
  <svg className="floating-chat__action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 4.25h15A2.25 2.25 0 0 1 21.75 6.5v8.25A2.25 2.25 0 0 1 19.5 17H9.4l-4.25 3.12A.75.75 0 0 1 4 19.52V6.5a2.25 2.25 0 0 1 .5-2.25Zm.75 2.25v11.54l3.45-2.53a.75.75 0 0 1 .44-.14H19.5a.75.75 0 0 0 .75-.75V6.5a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75Zm3 2.25h7.5v1.5h-7.5v-1.5Zm0 3h5.5v1.5h-5.5v-1.5Z" />
  </svg>
);

const MailIcon = () => (
  <svg className="floating-chat__action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.75 5.5h16.5c.96 0 1.75.79 1.75 1.75v9.5c0 .96-.79 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5c0-.96.79-1.75 1.75-1.75Zm.05 2.2v.22l8.2 5.03 8.2-5.03V7.7H3.8Zm16.4 8.83v-6.2l-7.55 4.63a1.25 1.25 0 0 1-1.3 0L3.8 10.33v6.2h16.4Z" />
  </svg>
);

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [status, setStatus] = useState("");
  const nameValue = senderName.trim();
  const emailValue = senderEmail.trim();
  const isContactComplete = nameValue && emailValue;
  const messageBody = `Name: ${nameValue || "[name]"}\nEmail: ${
    emailValue || "[email]"
  }\n\n${message.trim() || DEFAULT_MESSAGE}`;
  const encodedMessage = encodeURIComponent(messageBody);

  const emailLink = useMemo(
    () =>
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Portfolio inquiry"
      )}&body=${encodedMessage}`,
    [encodedMessage]
  );

  const smsLink = useMemo(
    () => `sms:${SMS_PHONE_NUMBER}?&body=${encodedMessage}`,
    [encodedMessage]
  );

  const validateContactDetails = (event) => {
    if (isContactComplete) {
      setStatus("");
      return;
    }

    event.preventDefault();
    setStatus("Please add your name and email before sending.");
  };

  const handleMissingSmsNumber = () => {
    setStatus("Add REACT_APP_SMS_PHONE_NUMBER to enable text messages.");
  };

  return (
    <aside className={`floating-chat ${isOpen ? "floating-chat--open" : ""}`}>
      {isOpen && (
        <div className="floating-chat__panel" role="dialog" aria-label="Quick contact">
          <div className="floating-chat__header">
            <div>
              <p className="floating-chat__eyebrow">Quick message</p>
              <h2 className="floating-chat__title">Send me a note</h2>
            </div>
            <button
              type="button"
              className="floating-chat__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close quick contact"
            >
              ×
            </button>
          </div>

          <div className="floating-chat__identity">
            <input
              className="floating-chat__input"
              type="text"
              value={senderName}
              onChange={(event) => setSenderName(event.target.value)}
              placeholder="Your name"
              autoComplete="name"
              aria-label="Your name"
              required
            />
            <input
              className="floating-chat__input"
              type="email"
              value={senderEmail}
              onChange={(event) => setSenderEmail(event.target.value)}
              placeholder="Your email"
              autoComplete="email"
              aria-label="Your email"
              required
            />
          </div>

          <textarea
            className="floating-chat__message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="4"
            aria-label="Message"
          />

          <div className="floating-chat__actions">
            {SMS_PHONE_NUMBER ? (
              <a
                className="floating-chat__action floating-chat__action--sms"
                href={smsLink}
                onClick={validateContactDetails}
              >
                <SmsIcon />
                Text
              </a>
            ) : (
              <button
                type="button"
                className="floating-chat__action floating-chat__action--sms"
                onClick={(event) => {
                  validateContactDetails(event);
                  if (isContactComplete) {
                    handleMissingSmsNumber();
                  }
                }}
              >
                <SmsIcon />
                Text
              </button>
            )}
            <a
              className="floating-chat__action"
              href={emailLink}
              onClick={validateContactDetails}
            >
              <MailIcon />
              Email
            </a>
          </div>

          {status && (
            <p className="floating-chat__status" role="status">
              {status}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        className="floating-chat__trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close quick contact" : "Open quick contact"}
      >
        <MessageIcon />
        <span>Chat</span>
      </button>
    </aside>
  );
}

export default FloatingChat;
