import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;
    const sheetsWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbwtVSlG_Mh0ThlSk4QPgYtFgGiBbYPqHQUf1Gn0_lblS-DlEjuIOtod4cJWfWQhaCoPVQ/exec';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured on the server.' },
        { status: 500 }
      );
    }

    // Extract gemini payload and metadata if provided
    const geminiPayload = body.geminiPayload || {
      contents: body.contents,
      systemInstruction: body.systemInstruction,
      generationConfig: body.generationConfig,
    };

    const metadata = body.metadata || {};

    // Proxy the request to the Google Gemini API securely from the backend
    const googleResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(geminiPayload),
      }
    );

    const data = await googleResponse.json();
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Asynchronously log to Google Sheets if configured
    if (sheetsWebhookUrl && metadata.userMessage) {
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
          sessionId: metadata.sessionId || 'N/A',
          userMessage: metadata.userMessage || '',
          botReply: botReply || '',
          pageUrl: metadata.pageUrl || '/',
          clickedWhatsApp: metadata.clickedWhatsApp || false,
          locale: metadata.locale || 'es',
        }),
      }).catch((err) => {
        console.error('Error sending chat log to Google Sheets:', err);
      });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in chat proxy API:', error);
    return NextResponse.json(
      { error: 'Internal server error during chat processing.' },
      { status: 500 }
    );
  }
}

