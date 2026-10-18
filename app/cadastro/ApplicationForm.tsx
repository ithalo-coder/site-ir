"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

// Formata enquanto a pessoa digita: (62) 98153-5607 (celular) ou (62) 3153-5607 (fixo).
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  const split = digits.length === 11 ? 5 : 4;
  return `(${ddd}) ${rest.slice(0, split)}${rest.length > split ? `-${rest.slice(split)}` : ""}`;
}

export default function ApplicationForm({
  interests,
  defaultInterest,
}: {
  interests: string[];
  defaultInterest?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: text("name"),
          email: text("email"),
          whatsapp: text("whatsapp"),
          company: text("company"),
          role: text("role"),
          interest: text("interest"),
          message: text("message"),
          consent: data.get("consent") === "on",
          website: text("website"),
        }),
      });

      const result: { error?: string } = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? "Não foi possível enviar agora. Tente novamente em instantes.");
        return;
      }

      form.reset();
      setWhatsapp("");
      setStatus("ok");
      setMessage("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setMessage("Sem conexão. Verifique sua internet e tente novamente.");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-card form-done" role="status">
        <div className="done-icon" aria-hidden="true">
          ✓
        </div>
        <h2>Aplicação enviada!</h2>
        <p>Recebemos suas informações e entraremos em contato em breve, pelo e-mail ou WhatsApp que você informou.</p>
        <div className="done-actions">
          <Link href="/" className="btn btn-primary">
            Voltar para a home
          </Link>
          <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
            Enviar outra aplicação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Nome completo</label>
        <input id="name" name="name" type="text" required minLength={2} maxLength={120} placeholder="Como você se chama?" autoComplete="name" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="voce@email.com" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            maxLength={16}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            value={whatsapp}
            onChange={(event) => setWhatsapp(formatPhone(event.target.value))}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="company">Empresa ou organização</label>
          <input id="company" name="company" type="text" maxLength={120} placeholder="Onde você atua?" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="role">Cargo</label>
          <input id="role" name="role" type="text" maxLength={120} placeholder="Qual é a sua função?" autoComplete="organization-title" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">Tipo de interesse</label>
        <select id="interest" name="interest" defaultValue={defaultInterest ?? ""}>
          <option value="" disabled>
            Selecione uma opção
          </option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Conte mais sobre o que você precisa</label>
        <textarea id="message" name="message" rows={5} maxLength={4000} placeholder="Objetivo, público, data prevista, tamanho da audiência..." />
      </div>

      {/* Campo isca contra robôs: pessoas não veem nem preenchem */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="consent">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">
          Concordo com o uso dos meus dados para contato, conforme a{" "}
          <a href="/privacidade" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>
          .
        </label>
      </div>

      <button type="submit" className="btn btn-primary submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar aplicação"}
      </button>

      {message ? (
        <p className="form-msg err" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
