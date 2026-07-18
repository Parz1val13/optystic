import nodemailer from "nodemailer";
import { EMAIL } from "@/lib/data";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name ||
    !email ||
    !message
  ) {
    return Response.json({ error: "Invalid submission" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Optystic site" <${process.env.SMTP_USER}>`,
    to: EMAIL,
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  });

  return Response.json({ ok: true });
}
