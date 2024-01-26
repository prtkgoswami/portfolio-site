import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { sendEmail } from "./email";
import "./index.css";

type MailFormProps = {};

type FormData = {
  senderName: string;
  senderEmail: string;
  message: string;
};

const MailForm = ({}: MailFormProps): ReactElement => {
  const [formData, setFormData] = useState<FormData>({
    senderName: "",
    senderEmail: "",
    message: "",
  });
  const [isMailSent, setMailSentStatus] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sentBtnClick = () => {
    const senderName = formData.senderName;
    const senderEmail = formData.senderEmail;
    const message = formData.message;

    console.log("send email with following data");
    console.log("Sender Name:", senderName);
    console.log("Sender Email:", senderEmail);
    console.log("Message:", message);
    // try {
    //   sendEmail({ senderName, senderEmail, message });
    // } catch (err) {
    //   console.log("couldnt send email");
    // }
    setFormData({
      senderName: "",
      senderEmail: "",
      message: "",
    });

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
          type="test"
          className="sender-name-input"
          name="senderName"
          id=""
          placeholder="Your Name"
          value={formData.senderName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="sender-email-input"
          name="senderEmail"
          id=""
          placeholder="Your Email Address"
          value={formData.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          className="message-input"
          name="message"
          id=""
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
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
