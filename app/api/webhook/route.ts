import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Data recieved:" + body);
  return NextResponse.json({ message: 'POST request received', data: body });
}
