import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Ícone da aba do navegador: monograma "IM" em âmbar sobre o azul-petróleo da marca.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1f2a",
          color: "#f2b134",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        IM
      </div>
    ),
    { ...size },
  );
}
