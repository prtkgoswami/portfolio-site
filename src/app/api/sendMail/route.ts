import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const reqParams = await request.json();
  const { name, email, message } = reqParams;
  console.log("Mail Params", reqParams);
  try {
    const data = await resend.emails.send({
      from: "Dev Portfolio <pratik@pratikgoswami.dev>",
      to: "prtkgoswami8@gmail.com",
      subject: "New Contact from Dev Portfolio",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }),
      text: "",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
