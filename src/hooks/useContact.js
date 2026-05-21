import emailjs from "@emailjs/browser";
import { useState } from "react";

const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "default_service";
const EMAILJS_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_yq66kwi";
const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "asWnA6RSUG2wRoq6n";

const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = msg.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending your message.",
      });
      return;
    }

    setStatus(null);

    const templateParams = {
      from_name: trimmedName,
      from_email: trimmedEmail,
      reply_to: trimmedEmail,
      to_name: "Kabilesh",
      message: trimmedMessage,
    };

    setLoading(true);

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus({
          type: "success",
          message: "Thanks for reaching out. I will get back to you soon.",
        });
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((err) => {
        console.error(err);
        setStatus({
          type: "error",
          message:
            "Something went wrong while sending. You can email me directly at kabilesh020799@gmail.com.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    name,
    setName,
    email,
    setEmail,
    msg,
    setMsg,
    loading,
    status,
    onSubmit,
  };
};

export default useContact;
