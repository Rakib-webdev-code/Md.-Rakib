import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return Response.json({ error: "Please fill in every field." }, { status: 400 });
  try {
    const t = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD } });
    await t.sendMail({ from: process.env.GMAIL_USER, to: process.env.GMAIL_USER, replyTo: email, subject: `Portfolio message from ${name}`, text: message });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send. Please email me directly." }, { status: 500 });
  }
}
