import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const { name, location, content, service } = await request.json();

    if (!name || !content) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const receivers = (process.env.BREVO_RECEIVER_EMAILS || "").split(',').map(e => e.trim()).filter(e => e !== "");

    if (receivers.length === 0) {
      return NextResponse.json({ success: false, error: "No receivers configured" }, { status: 500 });
    }

    const htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">새로운 서비스 후기 도착</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>지역:</strong> ${location || "미입력"}</p>
        <p><strong>이용한 서비스:</strong> ${service || "미선택"}</p>
        <p style="margin-top: 20px; font-weight: bold;">[후기 내용]</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; font-style: italic;">
          "${content}"
        </div>
        <p style="margin-top: 30px; font-size: 0.9em; color: #777;">
          * 이 메일은 HappyMom 웹사이트 후기 제출 폼을 통해 자동 발송되었습니다.
        </p>
      </div>
    `;

    const result = await sendEmail({
      to: receivers,
      subject: `[HappyMom] 새로운 후기 제출: ${name}님`,
      htmlContent: htmlContent
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
