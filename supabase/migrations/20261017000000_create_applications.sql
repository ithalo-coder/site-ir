-- Tabela de aplicações enviadas pelo formulário do site.
create table public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 200),
  whatsapp text check (char_length(whatsapp) <= 30),
  company text check (char_length(company) <= 120),
  role text check (char_length(role) <= 120),
  interest text check (char_length(interest) <= 120),
  message text check (char_length(message) <= 4000),
  consent boolean not null check (consent = true),
  status text not null default 'new' check (status in ('new', 'reviewing', 'contacted', 'archived'))
);

create index applications_created_at_idx on public.applications (created_at desc);

-- Segurança: RLS ligada. O público só pode INSERIR; ninguém lê pela chave pública.
alter table public.applications enable row level security;

create policy "Qualquer visitante pode enviar uma aplicação"
  on public.applications
  for insert
  to anon, authenticated
  with check (status = 'new' and consent = true);

-- Sem política de SELECT/UPDATE/DELETE: leitura e edição só pelo painel do Supabase
-- ou por uma chave de serviço (service role), nunca pelo site público.
