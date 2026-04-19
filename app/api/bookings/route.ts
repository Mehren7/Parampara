import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || !data.instructorId || !data.email || !data.requestedTime) {
    return NextResponse.json({ error: 'instructorId, email, and requestedTime are required.' }, { status: 400 });
  }

  // TODO: Replace with real booking persistence and payment integration.
  return NextResponse.json({
    message: 'Booking request received.',
    booking: {
      instructorId: data.instructorId,
      email: data.email,
      requestedTime: data.requestedTime,
    },
  });
}
