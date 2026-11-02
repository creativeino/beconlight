import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const type = String(body.type ?? "");
  if (!["admission", "a-level-registration", "job-application"].includes(type)) {
    return NextResponse.json({ ok: false, error: "Unknown form type." }, { status: 400 });
  }

  const required: Record<string, string[]> = {
    admission: ["student", "dob", "classApplying", "parent", "email", "phone"],
    "a-level-registration": ["programme", "student", "email", "phone", "board", "father", "mother", "address"],
    "job-application": ["role", "name", "email", "mobile", "degree", "experience"],
  };

  const missing = required[type].filter((key) => !String(body[key] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Your submission has been received. Our team will be in touch shortly.",
  });
}
