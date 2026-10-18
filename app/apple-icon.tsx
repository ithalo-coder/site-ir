import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Ícone para quando o site é salvo na tela inicial do iPhone.
export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        IM
      </div>
    ),
    { ...size },
  );
}
