// Endereço público do site, usado em sitemap, robots, imagem de compartilhamento e dados estruturados.
// Ordem: NEXT_PUBLIC_SITE_URL (defina na Vercel se usar domínio próprio) → domínio de produção
// que a própria Vercel informa → localhost.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
