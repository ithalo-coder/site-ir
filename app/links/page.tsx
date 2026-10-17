import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content as c } from "@/lib/content";

export const metadata: Metadata = {
  title: `Links · ${c.brand}`,
  description: `Todos os canais de contato e redes sociais de ${c.brand}.`,
};

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-card">
        <Image
          className="links-avatar"
          src="/images/italo-avatar.webp"
          alt={c.brand}
          width={112}
          height={112}
          priority
        />
        <h1>{c.brand}</h1>
        <p className="links-sub">{c.links.subtitle}</p>

        <nav className="links-list" aria-label="Meus links">
          {c.links.items.map((item) => {
            const className = item.highlight ? "link-btn highlight" : "link-btn";
            const external = /^https?:/.test(item.href);

            if (external) {
              return (
                <a key={item.label} href={item.href} className={className} target="_blank" rel="noopener noreferrer">
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={className}>
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            );
          })}
        </nav>

        <p className="links-foot">©{new Date().getFullYear()} {c.brand}</p>
      </div>
    </main>
  );
}
