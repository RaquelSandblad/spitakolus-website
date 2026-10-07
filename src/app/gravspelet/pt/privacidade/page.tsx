import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../../LangSwitch';

export const metadata: Metadata = {
  title: 'Privacidade no Glimmerbaggen – Spitakolus AB',
  description: 'Quais dados o Glimmerbaggen guarda e por quê.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Portugisiska (Brasilien) versionen av /gravspelet/integritet. Samma innehåll – ändras den svenska texten ska den här ändras också.
export default function GravspeletPrivacidade() {
  return (
    <div className="px-5 py-14" lang="pt-BR">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <LangSwitch page="privacy" current="pt" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Privacidade</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Última atualização: 1º de outubro de 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            O Glimmerbaggen é feito pela Spitakolus AB (Suécia). Você pode jogar sem conta. Nesse caso, seu mundo fica
            salvo só no seu celular ou no seu navegador, e nada sobre você é enviado para nós. O jogo não tem anúncios nem
            rastreamento. Quem quiser pode comprar <strong>O jogo completo</strong> (uma compra única, veja abaixo).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Se você criar uma conta</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>E-mail e senha</strong> – para que você possa entrar e receber e-mails para confirmar a conta ou
              escolher uma nova senha. A senha é guardada criptografada e ninguém consegue lê-la.
            </li>
            <li>
              <strong>Nome de usuário e cor</strong> – o nome de usuário aparece para outros jogadores, por exemplo na sala
              de espera do jogo em equipe.
            </li>
            <li>
              <strong>Seu jogo salvo</strong> – seu mundo, sua mochila e o que você construiu, para que você possa continuar
              em outro aparelho.
            </li>
          </ul>
          <p>As contas são para pessoas com 13 anos ou mais.</p>

          <h2 className="text-xl font-bold text-[#1b1030]">A compra &ldquo;O jogo completo&rdquo;</h2>
          <p>
            O começo do jogo é grátis. O resto da aventura você desbloqueia com uma compra única, <strong>O jogo
            completo</strong>. A compra é feita no Google Play ou na App Store, e é o Google ou a Apple que cobra e cuida dos
            seus dados de pagamento. Nós nunca vemos o número do seu cartão nem outros dados de pagamento.
          </p>
          <p>
            Para que o jogo saiba que você comprou O jogo completo, e para que você possa <strong>restaurar a compra</strong>{' '}
            em um celular novo, a compra é verificada pela <strong>RevenueCat</strong>. A RevenueCat recebe:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Um número de identificação</strong> – um ID aleatório que não diz nada sobre você, ou o número de
              identificação da sua conta, se você estiver conectado (para que a compra acompanhe a sua conta).
            </li>
            <li>
              <strong>O histórico de compras</strong> – o que foi comprado e quando, e o recibo da loja.
            </li>
          </ul>
          <p>
            A RevenueCat não recebe seu nome, seu e-mail nem seu nome de usuário. Como todos os serviços na internet, a
            RevenueCat também vê dados técnicos necessários para a compra funcionar, por exemplo endereço IP, versão do app e
            de qual loja e país é a compra. Os dados são usados apenas para desbloquear o que você comprou e para que você
            possa restaurar a compra.
          </p>
          <p>
            Os dados da compra ficam guardados na RevenueCat e no Google Play ou na App Store pelo tempo necessário para a
            compra, a contabilidade e reclamações, de acordo com os termos deles. Se quiser que apaguemos o que a RevenueCat
            tem sobre você, envie um e-mail para{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . A compra em si continua no Google ou na Apple, então você ainda pode restaurá-la.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Jogar junto</h2>
          <p>
            Quando você joga junto, a posição do seu besouro, o que você cava e constrói, seus sinais e seu nome de usuário
            (se estiver conectado) são enviados para os outros no mesmo jogo pelo nosso servidor de jogo. O servidor não
            guarda nada disso – tudo some quando o jogo termina. Para que as mensagens cheguem, o servidor vê seu endereço IP
            enquanto você está conectado.
          </p>
          <p>
            Se você <strong>bloquear</strong> alguém, o nome fica guardado só no seu celular. Se você <strong>denunciar</strong>{' '}
            alguém, guardamos o nome de quem você denunciou, o motivo, o tipo de jogo e o seu nome de usuário (se estiver
            conectado), para podermos analisar. As denúncias são apagadas depois de tratadas, no máximo após um ano.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Onde os dados ficam</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Supabase</strong> – contas, jogos salvos e denúncias, em servidores na Suécia (UE).
            </li>
            <li>
              <strong>Railway</strong> – o servidor de jogo para Jogar junto, na Holanda (UE). Não guarda nada.
            </li>
            <li>
              <strong>Resend</strong> – envia os e-mails do jogo, a partir da Irlanda (UE).
            </li>
            <li>
              <strong>RevenueCat</strong> (RevenueCat Inc.) – verifica a compra O jogo completo (veja acima). A RevenueCat é
              uma empresa dos EUA, então os dados são transferidos para os EUA. A transferência é protegida pelas Cláusulas
              Contratuais Padrão da UE.
            </li>
            <li>
              <strong>Google Play e Apple App Store</strong> – a compra em si e o pagamento. Eles tratam esses dados como
              controladores independentes, segundo os próprios termos.
            </li>
          </ul>
          <p>
            Supabase, Railway, Resend e RevenueCat tratam os dados em nosso nome e não podem usá-los para mais nada. Não
            vendemos dados e não os compartilhamos com mais ninguém. Tudo é enviado criptografado.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Excluir sua conta</h2>
          <p>
            No jogo: <strong>Menu → Conta → Excluir conta</strong> (toque duas vezes). A conta, o nome de usuário e o seu
            jogo salvo na nuvem são apagados na hora e para sempre. O jogo salvo no seu celular continua lá.
          </p>
          <p>
            Na web:{' '}
            <Link href="/gravspelet/pt/excluir-conta" className={link}>
              spitakolus.com/gravspelet/pt/excluir-conta
            </Link>{' '}
            – entre com e-mail e senha e exclua a conta na hora.
          </p>
          <p>
            Não consegue acessar a conta? Envie um e-mail para{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>{' '}
            a partir do endereço da conta, e nós excluímos a conta e tudo o que pertence a ela em até 30 dias.
          </p>
          <p>
            Depois que a conta é excluída, não sobra nada conosco que ligue o número de identificação da conta a você. O
            histórico de compras que a RevenueCat tem sob esse número continua conforme a seção sobre a compra acima – envie
            um e-mail se quiser que ele também seja apagado. Se você comprou O jogo completo, a compra continua no Google ou
            na Apple, e você pode restaurá-la no jogo (<strong>Menu → Conta → Restaurar compra</strong>).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Seus direitos</h2>
          <p>
            Você pode a qualquer momento pedir para ver, corrigir ou apagar seus dados – envie um e-mail para{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . Se achar que tratamos seus dados de forma errada, você pode reclamar à autoridade sueca de proteção de dados
            (IMY) ou à autoridade de proteção de dados do seu país (no Brasil, a ANPD).
          </p>
          <p className="text-sm">
            Leia também{' '}
            <Link href="/gravspelet/pt/termos" className="underline">
              os termos e regras do Glimmerbaggen
            </Link>{' '}
            e a{' '}
            <Link href="/integritetspolicy" className="underline">
              política de privacidade
            </Link>{' '}
            da Spitakolus AB (em sueco).
          </p>
        </div>
      </article>
    </div>
  );
}
