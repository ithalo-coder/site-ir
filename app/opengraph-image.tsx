import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { content } from "@/lib/content";

export const alt = `${content.brand} · Mentalidade, disciplina e investimentos`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem que aparece quando o link do site é compartilhado no WhatsApp, Instagram, LinkedIn etc.
export default async function OpengraphImage() {
  const file = await readFile(path.join(process.cwd(), "lib/og-photo.jpg"));
  const photo = `data:image/jpeg;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1f2a",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 4, color: "#f2b134" }}>
            MENTALIDADE · DISCIPLINA · INVESTIMENTOS
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{content.brand}</div>
          <div style={{ display: "flex", fontSize: 32, lineHeight: 1.35, color: "#c5d2db" }}>
            Palestras, mentorias e o Café de Negócios para Empresários.
          </div>
        </div>
        <div style={{ display: "flex", width: 504, height: 630 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" width={504} height={630} style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
