import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { content as c } from "@/lib/content";

function PlayIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#F2B134" />
      <path d="M26 20 L46 32 L26 44 Z" fill="#0B1F2A" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <div className="eyebrow">{c.hero.eyebrow}</div>
              <h1>{c.hero.title}</h1>
              <p>{c.hero.text}</p>
              <div className="hero-actions">
                <Link href="/cadastro" className="btn btn-primary">
                  {c.hero.primaryCta}
                </Link>
                <a href="#sobre" className="btn btn-ghost">
                  {c.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="hero-photo">
              <Image
                src="/images/italo-hero.webp"
                alt="Ithalo Ribeiro durante uma palestra, com o microfone na mão e o dedo na têmpora"
                width={1024}
                height={1280}
                priority
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="stats" aria-label="Números">
          <div className="container">
            {c.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="section section-bg">
          <div className="container about">
            <div className="about-photo">
              <div className="ph">{c.about.photoLabel}</div>
            </div>
            <div className="about-text">
              <div className="eyebrow">{c.about.eyebrow}</div>
              <h2>{c.about.title}</h2>
              {c.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="credentials">
                {c.about.credentials.map((item, i) => (
                  <div className="credential" key={i}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Palestras e programas */}
        <section id="palestras" className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{c.services.eyebrow}</div>
              <h2>{c.services.title}</h2>
            </div>
            <div className="cards">
              {c.services.items.map((item, i) => (
                <div className="card" key={i}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={`/cadastro?interesse=${["palestra", "mentoria", "cafe"][i] ?? ""}`} className="card-link">
                    Saber mais →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Livros */}
        <section id="livros" className="section section-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{c.books.eyebrow}</div>
              <h2>{c.books.title}</h2>
            </div>
            <div className="books">
              {c.books.items.map((item, i) => (
                <div className="book" key={i}>
                  <div className="ph">[CAPA 3:4]</div>
                  <div className="item-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vídeos */}
        <section id="videos" className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{c.videos.eyebrow}</div>
              <h2>{c.videos.title}</h2>
            </div>
            <div className="videos">
              {c.videos.items.map((item, i) => (
                <div className="video" key={i}>
                  <div className="video-thumb">
                    <PlayIcon />
                  </div>
                  <div className="item-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="section section-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{c.testimonials.eyebrow}</div>
              <h2>{c.testimonials.title}</h2>
            </div>
            <div className="quotes">
              {c.testimonials.items.map((item, i) => (
                <figure className="quote" key={i}>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>{item.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="cta">
          <div className="container">
            <div className="cta-text">
              <h2>{c.cta.title}</h2>
              <p>{c.cta.text}</p>
            </div>
            <Link href="/cadastro" className="btn btn-primary">
              {c.cta.button}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
