import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { content as c } from "@/lib/content";

const m = c.mentoria;

export const metadata: Metadata = {
  title: `Mentoria · ${c.brand}`,
  description:
    "Mentoria de disciplina, bons hábitos, constância, gestão do tempo e investimento com pouco, para ter mais liberdade financeira no médio e longo prazo.",
};

export default function MentoriaPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <div className="eyebrow">{m.eyebrow}</div>
              <h1>{m.title}</h1>
              <p>{m.text}</p>
              <div className="hero-actions">
                <Link href="/cadastro?interesse=mentoria" className="btn btn-primary">
                  {m.primaryCta}
                </Link>
                <a href="#pilares" className="btn btn-ghost">
                  {m.secondaryCta}
                </a>
              </div>
            </div>
            <div className="hero-photo">
              <Image
                src="/images/italo-hero.webp"
                alt="Ithalo Marçal durante uma palestra, com o microfone na mão e o dedo na têmpora"
                width={1024}
                height={1280}
                priority
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="section section-white">
          <div className="container about">
            <div className="about-text">
              <div className="eyebrow">{m.forWhom.eyebrow}</div>
              <h2>{m.forWhom.title}</h2>
              <div className="credentials">
                {m.forWhom.items.map((item, i) => (
                  <div className="credential" key={i}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section id="pilares" className="section section-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{m.pillars.eyebrow}</div>
              <h2>{m.pillars.title}</h2>
            </div>
            <div className="pillars">
              {m.pillars.items.map((item, i) => (
                <div className="card" key={i}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="section section-white">
          <div className="container about">
            <div className="about-text">
              <div className="eyebrow">{m.how.eyebrow}</div>
              <h2>{m.how.title}</h2>
              <ol className="steps">
                {m.how.steps.map((s, i) => (
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
            <div className="about-text">
              <div className="eyebrow">{m.format.eyebrow}</div>
              <h2>{m.format.title}</h2>
              <dl className="facts">
                {m.format.items.map((f, i) => (
                  <div className="fact" key={i}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Resultado */}
        <section className="section section-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{m.outcome.eyebrow}</div>
              <h2>{m.outcome.title}</h2>
              <p className="lead">{m.outcome.text}</p>
            </div>
          </div>
        </section>

        {/* Quem conduz */}
        <section className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{m.mentor.eyebrow}</div>
              <h2>{m.mentor.title}</h2>
              <p className="lead">{m.mentor.text}</p>
              <Link href="/#sobre" className="card-link">
                {m.mentor.link} →
              </Link>
            </div>
            <p className="fineprint">{m.disclaimer}</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="cta">
          <div className="container">
            <div className="cta-text">
              <h2>{m.cta.title}</h2>
              <p>{m.cta.text}</p>
            </div>
            <Link href="/cadastro?interesse=mentoria" className="btn btn-primary">
              {m.cta.button}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
