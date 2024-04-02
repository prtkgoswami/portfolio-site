"use client";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

export type FormData = {
  name: string;
  email: string;
  toEmail: string;
  message: string;
};

enum MailState {
  "unsent",
  "successful",
  "failure",
}

const MailForm = ({}): ReactElement => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();
  const [mailSentStatus, setMailSentStatus] = useState(MailState.unsent);
  const [isLoading, setIsLoading] = useState(false);

  const onSendMail = (data: FormData) => {
    setIsLoading(true);
    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    }).then((data) => {
      data.json().then((resp) => {
        setIsLoading(false);
        if (resp.error) {
          setMailSentStatus(MailState.failure);
        } else {
          setMailSentStatus(MailState.successful);
        }

        setTimeout(() => {
          setMailSentStatus(MailState.unsent);
        }, 5000);
      });
    });
    reset();
  };

  useEffect(() => {
    if (mailSentStatus !== MailState.unsent) {
      setTimeout(() => {
        setMailSentStatus(MailState.unsent);
      }, 3000);
    }
  }, [mailSentStatus]);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSendMail)}>
        <input
          type="test"
          placeholder="Your Name"
          className={`sender-name-input ${errors.name ? "" : ""}`}
          {...register("name", { required: "Your Name is Required" })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p role="alert" className="form-error-msg">
            {errors.name.message}
          </p>
        )}

        <input
          type="email"
          placeholder="Your Email Address"
          className="sender-email-input"
          {...register("email", {
            required: "Your Email is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p role="alert" className="form-error-msg">
            {errors.email.message}
          </p>
        )}

        <textarea
          placeholder="Your Message"
          className="message-input"
          {...register("message")}
        />

        <button
          id="send-btn"
          className={mailSentStatus === MailState.successful ? "sent" : ""}
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
          ) : (
            <>
              <div id="envelope">
                <div id="envelope-inside"></div>
                <div id="envelope-body">
                  <div id="left-half"></div>
                  <div id="right-half"></div>
                </div>
                <div id="envelope-top"></div>
                <div id="letter"></div>
              </div>
              <div className="btn-overlay">Send</div>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default MailForm;
