import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { content as c } from "@/lib/content";

export const metadata: Metadata = {
  title: `Política de Privacidade · ${c.brand}`,
  description: `Como ${c.brand} trata os dados pessoais enviados pelo site, conforme a Lei Geral de Proteção de Dados (LGPD).`,
  alternates: { canonical: "/privacidade" },
  openGraph: { url: "/privacidade" },
};

// Itens entre [COLCHETES] precisam ser preenchidos (nome/CNPJ do responsável, e-mail e prazo).
export default function PrivacyPage() {
  return (
    <>
      <SiteHeader minimal />
      <main id="conteudo" className="container legal">
        <div className="eyebrow">PRIVACIDADE</div>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: [DATA]</p>

        <p>
          Esta política explica quais dados pessoais coletamos neste site, para que usamos e quais são os seus direitos,
          de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).
        </p>

        <h2>1. Quem é o responsável</h2>
        <p>
          O responsável pelo tratamento dos seus dados é {c.brand} ([RAZÃO SOCIAL / CNPJ OU CPF]). Para falar sobre
          privacidade, escreva para [E-MAIL DE CONTATO].
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p>Coletamos apenas o que você preenche no formulário de candidatura (página Cadastro):</p>
        <ul>
          <li>nome completo e e-mail (obrigatórios);</li>
          <li>WhatsApp, empresa ou organização e cargo (opcionais);</li>
          <li>tipo de interesse e a mensagem que você escrever (opcionais);</li>
          <li>o registro de que você aceitou esta política e a data do envio.</li>
        </ul>
        <p>
          O site não usa cookies de publicidade nem ferramentas de monitoramento de visitas. Se isso mudar, esta política
          será atualizada antes.
        </p>

        <h2>3. Para que usamos os dados</h2>
        <ul>
          <li>responder à sua candidatura e entrar em contato sobre palestras, mentorias e eventos;</li>
          <li>avaliar se o seu pedido se encaixa nos serviços oferecidos;</li>
          <li>cumprir obrigações legais, quando houver.</li>
        </ul>
        <p>Não vendemos seus dados e não os usamos para fins diferentes dos descritos aqui.</p>

        <h2>4. Base legal</h2>
        <p>
          Tratamos seus dados com base no seu <strong>consentimento</strong> (art. 7º, inciso I, da LGPD), dado ao marcar
          a caixa de concordância no formulário. Você pode retirar o consentimento a qualquer momento.
        </p>

        <h2>5. Com quem compartilhamos</h2>
        <p>
          Usamos prestadores de serviço para manter o site funcionando: hospedagem (Vercel) e banco de dados (Supabase).
          Eles armazenam e processam os dados apenas para nos prestar o serviço. Fora isso, só compartilhamos dados por
          obrigação legal ou ordem judicial.
        </p>

        <h2>6. Por quanto tempo guardamos</h2>
        <p>
          Guardamos suas informações pelo tempo necessário para responder ao seu contato e, depois disso, por até
          [PRAZO, ex.: 12 meses], salvo se a lei exigir um prazo maior. Depois disso, os dados são apagados ou
          anonimizados.
        </p>

        <h2>7. Seus direitos</h2>
        <p>Você pode pedir, a qualquer momento e gratuitamente:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>eliminação dos dados tratados com base no consentimento;</li>
          <li>informação sobre com quem os dados foram compartilhados;</li>
          <li>revogação do consentimento.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, envie um e-mail para [E-MAIL DE CONTATO]. Você também pode registrar
          reclamação na Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>8. Segurança</h2>
        <p>
          Adotamos medidas técnicas para proteger os dados: conexão criptografada (HTTPS), acesso restrito ao banco de
          dados e regras que impedem a leitura pública das candidaturas enviadas.
        </p>

        <h2>9. Mudanças nesta política</h2>
        <p>
          Podemos atualizar esta política. A data da última atualização fica sempre no topo desta página.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
