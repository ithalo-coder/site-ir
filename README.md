# site-ir

Site institucional em Next.js (App Router) com formulário de candidatura gravando no Supabase.

## Estrutura

- `app/page.tsx`: Home
- `app/cadastro/`: página e formulário de candidatura (`/cadastro`). Aceita `?interesse=palestra`, `mentoria` ou `cafe` para abrir com a opção marcada
- `app/links/`: página de links para a bio das redes sociais (`/links`)
- `app/api/applications/route.ts`: rota que valida e grava no Supabase
- `lib/content.ts`: **todos os textos do site**. Troque os `[PLACEHOLDERS]` aqui
- `app/globals.css`: estilos e paleta (variáveis no topo)
- `supabase/migrations/`: SQL da tabela `applications`

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha com os dados do seu projeto Supabase
npm run dev
```

## Variáveis de ambiente

| Nome | Para quê |
| --- | --- |
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_PUBLISHABLE_KEY` | Chave pública (publishable). A tabela só aceita inserção por RLS |

Sem essas variáveis o site funciona, mas o formulário responde que o envio não está configurado.

## Deploy

Conectado à Vercel: cada push na branch principal publica automaticamente.
