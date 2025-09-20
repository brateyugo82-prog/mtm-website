import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Ungültige Eingabe" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Office365 nutzt STARTTLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { ciphers: "SSLv3" },
    });

    await transporter.sendMail({
      from: `"MTM Website" <${process.env.SMTP_USER}>`,
      to: "info@mtm-service.de",
      subject: "Neue Kontaktanfrage über die MTM-Website",
      text: `
Name: ${data.name}
E-Mail: ${data.email}

Nachricht:
${data.message}
      `,
    });

    // ✅ Cookie setzen für 10 Minuten
    cookies().set({
      name: "contact_submitted",
      value: "true",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 10,
    });

    // ✅ Response inkl. Set-Cookie-Header
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookies().toString(),
      },
    });
  } catch (error) {
    console.error("Mail Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
