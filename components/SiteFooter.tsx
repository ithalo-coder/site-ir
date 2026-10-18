import Link from "next/link";
import { content } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-col wide">
            <div className="footer-logo">{content.brand}</div>
            <div style={{ maxWidth: 320 }}>{content.footer.tagline}</div>
          </div>
          <div className="footer-col">
            <strong>Navegação</strong>
            {content.nav.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>Redes sociais</strong>
            {content.footer.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-disclaimer">{content.footer.disclaimer}</p>
        <div className="footer-bottom">
          <div>©{new Date().getFullYear()} {content.brand}. Todos os direitos reservados.</div>
          <Link href="/privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
