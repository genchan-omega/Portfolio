// /src/app/api/contact/route.tsx

import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.TO_EMAIL as string;
  const { name, email, message } = await req.json();
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      subject: "新しいお問い合わせ",
      html: `<p><b>名前:</b> ${name}<br/><b>メール:</b> ${email}<br/><b>内容:</b><br/>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "送信エラー" }, { status: 500 });
  }
}
