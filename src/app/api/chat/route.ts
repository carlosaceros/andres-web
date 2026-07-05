import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured on the server.' },
        { status: 500 }
      );
    }

    // Proxy the request to the Google Gemini API securely from the backend
    const googleResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await googleResponse.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in chat proxy API:', error);
    return NextResponse.json(
      { error: 'Internal server error during chat processing.' },
      { status: 500 }
    );
  }
}
