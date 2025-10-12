"use client";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";
import "./index.css";

export type FormData = {
  name: string;
  email: string;
  toEmail: string;
  message: string;
  honey: string;
};

enum MailState {
  "unsent",
  "successful",
  "failure",
}

const MailForm = ({}): ReactElement => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch
  } = useForm<FormData>({mode: "onBlur"});
  const [mailSentStatus, setMailSentStatus] = useState(MailState.unsent);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formValues = watch();

  const onSendMail = (data: FormData) => {
    if (!token) {
      alert("Please verify you're human.");
      return;
    }

    if (data.honey)
      return;

    setIsLoading(true);
    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        turnstileToken: token
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
          type="text"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          {...register("honey")}
        />

        <input
          type="text"
          placeholder="Your Name"
          className={`sender-name-input ${errors.name ? "" : ""}`}
          {...register("name", {
            required: "Your Name is Required",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 50, message: "Too long" },
            pattern: {
              value: /^[A-Za-z\s'.-]+$/,
              message: "Invalid characters in name",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p role="alert" className="form-error-msg">
            Attention: {errors.name.message}
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
            Attention: {errors.email.message}
          </p>
        )}

        <textarea
          placeholder="Your Message"
          className="message-input"
          {...register("message", {
            required: "Message is Required",
            minLength: {
              value: 20,
              message: "Message too short — please elaborate a bit.",
            },
            maxLength: {
              value: 1000,
              message: "Message too long — please keep it concise.",
            },
            validate: (value) =>
              !/(http|www\.|https)/i.test(value) ||
              "Links not allowed — please describe your request instead.",
          })}
        />
        {errors.message && (
          <p role="alert" className="form-error-msg">
            Attention: {errors.message.message}
          </p>
        )}

        <Turnstile
          sitekey={process.env.NEXT_PUBLIC_CF_SITE_KEY!}
          onVerify={setToken}
        />

        <button
          id="send-btn"
          className={mailSentStatus === MailState.successful ? "sent" : ""}
          disabled={!isValid || !token || isLoading}
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
