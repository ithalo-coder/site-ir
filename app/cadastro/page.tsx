import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ApplicationForm from "./ApplicationForm";
import { content as c } from "@/lib/content";

export const metadata: Metadata = {
  title: `Cadastro · ${c.brand}`,
  description: `Formulário de aplicação para palestras, mentorias e eventos com ${c.brand}.`,
  alternates: { canonical: "/cadastro" },
  openGraph: { url: "/cadastro" },
};

// Permite links como /cadastro?interesse=mentoria, que já abrem com a opção marcada.
function pickInterest(key: string | undefined, interests: string[]): string | undefined {
  switch (key?.toLowerCase()) {
    case "palestra":
      return interests[0];
    case "mentoria":
      return interests[1];
    case "cafe":
      return interests[2];
    default:
      return undefined;
  }
}

export default async function CadastroPage({
  searchParams,
}: {
  searchParams: Promise<{ interesse?: string | string[] }>;
}) {
  const params = await searchParams;
  const key = Array.isArray(params.interesse) ? params.interesse[0] : params.interesse;
  const a = c.application;
  const defaultInterest = pickInterest(key, a.interests);
  return (
    <>
      <SiteHeader minimal />
      <main id="conteudo" className="container app-main">
        <div className="app-intro">
          <div className="eyebrow">{a.eyebrow}</div>
          <h1>{a.title}</h1>
          <p>{a.text}</p>
          <ol className="steps">
            {a.steps.map((s, i) => (
              <li className="step" key={i}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-text">{s.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <ApplicationForm interests={a.interests} defaultInterest={defaultInterest} />
      </main>
    </>
  );
}
