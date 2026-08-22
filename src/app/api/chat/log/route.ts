import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const sheetsWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbwtVSlG_Mh0ThlSk4QPgYtFgGiBbYPqHQUf1Gn0_lblS-DlEjuIOtod4cJWfWQhaCoPVQ/exec';

    if (sheetsWebhookUrl) {
      const now = new Date();
      const bogotaTime = new Intl.DateTimeFormat('es-CO', {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'America/Bogota',
      }).format(now);

      fetch(sheetsWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: bogotaTime,
          sessionId: body.sessionId || 'N/A',
          userMessage: body.userMessage || '⚡ [ACCIÓN]: Clic a WhatsApp desde Chat',
          botReply: body.botReply || 'Transferido a WhatsApp del Dr. Andrés Pérez (+57 316 495 3755)',
          pageUrl: body.pageUrl || '/',
          clickedWhatsApp: true,
          locale: body.locale || 'es',
        }),
      }).catch((err) => {
        console.error('Error logging WhatsApp action to Google Sheets:', err);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in /api/chat/log:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
