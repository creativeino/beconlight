import { NextResponse } from "next/server";

const required = ["name", "email", "topic", "message"];

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const missing = required.filter((key) => !String(body[key] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  const email = String(body.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email address is required." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you for reaching out. Our team will contact you shortly.",
  });
}
