import Link from "next/link";
import { content } from "@/lib/content";

export default function SiteHeader({ minimal = false }: { minimal?: boolean }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo">
          {content.brand}
        </Link>
        {minimal ? (
          <Link href="/" style={{ fontSize: 15, fontWeight: 600 }}>
            ← Voltar para a home
          </Link>
        ) : (
          <>
            <nav className="nav" aria-label="Principal">
              {content.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/cadastro" className="btn btn-primary btn-sm">
              Aplicar agora
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
