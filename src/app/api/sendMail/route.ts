import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";
import DOMPurify from "isomorphic-dompurify";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";


const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "1 h"),
  analytics: true,
});

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const clean = (text: string) => DOMPurify.sanitize(text).trim();

const isGibberish = (text: string) => {
  if (/([a-zA-Z])\1{4,}/.test(text)) return true; // e.g. "aaaaaa"
  if (text.split(" ").length < 3) return true; // too few words
  if (!/[aeiou]/i.test(text)) return true; // no vowels (nonsense)
  return false;
};

const verifyTurnstile = async (token: string) => {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });
  return res.json();
};

export async function POST(request: Request) {
  try {
    const { turnstileToken, ...reqParams } = await request.json();
    
    const result = await verifyTurnstile(turnstileToken);
    if (!result.success) {
      return Response.json({ error: "Failed CAPTCHA validation" }, { status: 403 });
    }

    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return Response.json(
        { error: "Too many requests — please try again later." },
        { status: 429 }
      );
    }

    let { name, email, message } = reqParams;
    name = clean(name);
    email = clean(email);
    message = clean(message);

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[A-Za-z\s'.-]{2,50}$/.test(name)) {
      return Response.json({ error: "Invalid name format" }, { status: 400 });
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (message.length < 20 || message.length > 1000) {
      return Response.json({ error: "Message length invalid" }, { status: 400 });
    }

    if (isGibberish(message) || /(http|https|www\.)/i.test(message)) {
      return Response.json({ error: "Spam-like message detected" }, { status: 400 });
    }

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
