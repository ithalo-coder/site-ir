import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ApplicationForm from "./ApplicationForm";
import { content as c } from "@/lib/content";

export const metadata: Metadata = {
  title: `Aplicação · ${c.brand}`,
};

export default function AplicacaoPage() {
  const a = c.application;
  return (
    <>
      <SiteHeader minimal />
      <main className="container app-main">
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
        <ApplicationForm interests={a.interests} />
      </main>
    </>
  );
}
