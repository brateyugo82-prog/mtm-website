import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    // ✅ cookies() NUR HIER
    const cookieStore = await cookies();
    const alreadySubmitted = cookieStore.get("contact_submitted");

    if (alreadySubmitted) {
      return NextResponse.json(
        { success: false, error: "Bitte warte kurz vor einer neuen Anfrage." },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Ungültige Eingabe" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"MTM Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "Neue Kontaktanfrage über die MTM-Website",
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `.trim(),
    });

    // ✅ Cookie setzen – immer noch im Request
    cookieStore.set({
      name: "contact_submitted",
      value: "true",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 10,
    });

    console.log("📥 Lead received", {
      client: "mtm_client",
      source: "contact_form",
      name,
      email,
      page: "/contact",
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Contact API Error:", err);
    return NextResponse.json(
      { success: false, error: "Serverfehler" },
      { status: 500 }
    );
  }
}