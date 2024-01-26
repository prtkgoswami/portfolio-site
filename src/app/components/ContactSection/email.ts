"use server";
import mailjet from "node-mailjet";

const mailjetClient = new mailjet({
  apiKey: process.env.MAILJET_API_PUBLIC_KEY ?? "",
  apiSecret: process.env.MAILJET_API_PRIVATE_KEY ?? "",
  options: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

const EMAIL_CONSTANTS = {
  receiverEmail: "prtkgoswami8@gmail.com",
  receiverName: "Pratik Goswami",
  subject: "Portfolio Contact",
};

type SendEmailParams = {
  senderName: string;
  senderEmail: string;
  message: string;
};

export const sendEmail = async ({
  senderName,
  senderEmail,
  message,
}: SendEmailParams) => {
  const emailRequest = {
    Messages: [
      {
        From: {
          Email: senderEmail,
          Name: senderName,
        },
        To: [
          {
            Email: EMAIL_CONSTANTS.receiverEmail,
            Name: EMAIL_CONSTANTS.receiverName,
          },
        ],
        Subject: EMAIL_CONSTANTS.subject,
        TextPart: message,
      },
    ],
  };

  mailjetClient
    .post("send", { version: "v3.1" })
    .request(emailRequest)
    .then((resp) => {
      console.log("Email Sent");
      return resp;
    })
    .catch((err) => {
      console.error("Error Sending Email:", err);
      throw err;
    });
};
