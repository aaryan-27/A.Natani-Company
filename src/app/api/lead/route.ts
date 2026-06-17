import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Lead capture endpoint.
 *
 * Out of the box this validates and logs the lead (WhatsApp is the guaranteed
 * delivery channel from the client). To persist leads and send email
 * notifications, wire the marked sections below to Supabase + your mailer and
 * set the corresponding env vars.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 422 }
    );
  }

  const lead = {
    name,
    phone,
    email: String(body.email ?? "").trim() || null,
    service: String(body.service ?? "").trim() || null,
    message: String(body.message ?? "").trim() || null,
    source: String(body.source ?? "website"),
    createdAt: new Date().toISOString(),
  };

  // --- Persist to Supabase (optional) -----------------------------------
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(
  //   process.env.SUPABASE_URL!,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY!
  // );
  // await supabase.from("leads").insert(lead);

  // --- Email notification (optional) ------------------------------------
  // Send via Resend / Nodemailer / SES using process.env.* here.

  console.log("[lead]", lead);

  return NextResponse.json({ ok: true });
}
