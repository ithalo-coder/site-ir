import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/sora";
import "./globals.css";
import { content } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const title = "Ithalo Marçal · Mentalidade, disciplina e investimentos";
const description =
  "Palestras, mentorias e o Café de Negócios para Empresários, com Ithalo Marçal. Mentalidade visionária, disciplina e investimento.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: content.brand,
  authors: [{ name: content.brand }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: content.brand,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1f2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
