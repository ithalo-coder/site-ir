import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;

  // Campo isca preenchido: provavelmente é robô. Responde ok sem salvar.
  if (clean(input.website, 200) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(input.name, 120);
  const email = clean(input.email, 200);

  if (name.length < 2) {
    return NextResponse.json({ error: "Informe seu nome completo." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (input.consent !== true) {
    return NextResponse.json({ error: "É preciso aceitar a Política de Privacidade." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    return NextResponse.json(
      { error: "O envio ainda não está configurado. Tente novamente mais tarde." },
      { status: 503 },
    );
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { error } = await supabase.from("applications").insert({
    name,
    email,
    whatsapp: clean(input.whatsapp, 30) || null,
    company: clean(input.company, 120) || null,
    role: clean(input.role, 120) || null,
    interest: clean(input.interest, 120) || null,
    message: clean(input.message, 4000) || null,
    consent: true,
  });

  if (error) {
    console.error("Falha ao salvar aplicação:", error.message);
    return NextResponse.json({ error: "Não foi possível enviar agora. Tente novamente em instantes." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
