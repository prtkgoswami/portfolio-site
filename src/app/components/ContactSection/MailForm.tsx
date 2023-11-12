import { ReactElement, useEffect, useRef, useState } from "react";
import "./index.css";

type MailFormProps = {};

const MailForm = ({}: MailFormProps): ReactElement => {
  const [isMailSent, setMailSentStatus] = useState(false);
  const formRef = useRef(null);
  const sentBtnClick = () => {
    setMailSentStatus(true);
  };

  useEffect(() => {
    if (isMailSent) {
      setTimeout(() => {
        setMailSentStatus(false);
      }, 3000);
    }
  }, [isMailSent]);

  return (
    <div className="form-wrapper">
      <form action="" ref={formRef}>
        <input
          type="email"
          className="sender-email-input"
          name="sender_email"
          id=""
          placeholder="Your Email Address"
        />
        <textarea
          className="message-input"
          name="message"
          id=""
          placeholder="Your Message"
        />
        {/* <input type="submit" className="send-btn" value="Send" /> */}
        <div id="send-btn" className={isMailSent ? "sent" : ""}>
          <div id="envelope">
            <div id="envelope-inside"></div>
            <div id="envelope-body">
              <div id="left-half"></div>
              <div id="right-half"></div>
            </div>
            <div id="envelope-top"></div>
            <div id="letter"></div>
          </div>
          <div className="btn-overlay" onClick={sentBtnClick}>
            Send
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailForm;
