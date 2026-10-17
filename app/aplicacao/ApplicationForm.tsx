"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ApplicationForm({ interests }: { interests: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
      setStatus("ok");
      setMessage("Aplicação enviada! Entraremos em contato em breve.");
    } catch {
      setStatus("error");
      setMessage("Sem conexão. Verifique sua internet e tente novamente.");
    }
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
          <input id="whatsapp" name="whatsapp" type="tel" maxLength={30} placeholder="(00) 00000-0000" autoComplete="tel" />
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
        <select id="interest" name="interest" defaultValue="">
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
          Concordo com o uso dos meus dados para contato, conforme a <a href="#">Política de Privacidade</a>.
        </label>
      </div>

      <button type="submit" className="btn btn-primary submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar aplicação"}
      </button>

      {message ? (
        <p className={status === "ok" ? "form-msg ok" : "form-msg err"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
