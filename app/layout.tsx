import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ithalo Ribeiro · Mentalidade, disciplina e investimentos",
  description:
    "Palestras, mentorias e o Café de Negócios para Empresários, com Ithalo Ribeiro. Mentalidade visionária, disciplina e investimento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
