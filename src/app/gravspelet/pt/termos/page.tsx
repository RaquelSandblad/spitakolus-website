import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../../LangSwitch';

export const metadata: Metadata = {
  title: 'Termos do Glimmerbaggen – Spitakolus AB',
  description: 'Regras para jogar Glimmerbaggen e jogar junto com outras pessoas.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Portugisiska (Brasilien) versionen av /gravspelet/villkor. Samma innehåll – ändras den svenska texten ska den här ändras också.
export default function GravspeletTermos() {
  return (
    <div className="px-5 py-14" lang="pt-BR">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <LangSwitch page="terms" current="pt" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Termos e regras</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Última atualização: 1º de outubro de 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            O Glimmerbaggen é feito pela Spitakolus AB (Suécia). Ao jogar Glimmerbaggen, criar uma conta ou jogar junto com
            outras pessoas, você aceita estes termos.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Regras para jogar junto</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Seja legal com quem você joga.</li>
            <li>
              Escolha um nome de usuário gentil. Sem palavrões, sem palavras maldosas ou sexuais e sem o nome de outra
              pessoa.
            </li>
            <li>Não trapaceie e não modifique o jogo para atrapalhar os outros.</li>
            <li>Nunca compartilhe dados pessoais de outras pessoas.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1b1030]">Bloquear e denunciar</h2>
          <p>
            Se alguém for maldoso, trapacear ou tiver um nome inadequado, vá em <strong>Menu → Jogar junto → Denunciar /
            bloquear</strong> no jogo. Se você bloquear alguém, vocês saem do jogo um do outro e não jogarão juntos de novo.
            Se você denunciar alguém, nós ficamos sabendo. Você também pode enviar um e-mail para{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            .
          </p>
          <p>
            Lemos todas as denúncias. Quem quebrar as regras pode ter o nome de usuário alterado ou a conta suspensa ou
            excluída.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Sua conta</h2>
          <p>
            As contas são para pessoas com 13 anos ou mais. Você é responsável pela sua senha. Você pode excluir a conta
            quando quiser no jogo (<strong>Menu → Conta → Excluir conta</strong>).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">A compra &ldquo;O jogo completo&rdquo;</h2>
          <p>
            O começo do jogo é grátis. <strong>O jogo completo</strong> é uma compra única que desbloqueia o resto da
            aventura para sempre – não é uma assinatura. A compra é feita no Google Play ou na App Store, e os termos deles
            valem para o pagamento e para reembolsos. Se quiser seu dinheiro de volta, peça ao Google ou à Apple.
          </p>
          <p>
            A compra pertence à sua conta do Google ou da Apple. Se você trocar de celular ou reinstalar o jogo, toque em{' '}
            <strong>Menu → Conta → Restaurar compra</strong>. Se você estiver conectado no jogo, a compra também acompanha
            a sua conta. Jogar junto como convidado e os jogos em equipe são grátis para todos.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">O jogo</h2>
          <p>
            Fazemos o possível para que o jogo e o salvamento na nuvem funcionem, mas não podemos prometer que funcionem
            sempre. O jogo pode mudar, e recursos podem ser adicionados ou removidos. O jogo e tudo o que há nele pertencem à
            Spitakolus AB.
          </p>

          <p className="text-sm">
            Leia também{' '}
            <Link href="/gravspelet/pt/privacidade" className="underline">
              quais dados o jogo guarda
            </Link>
            . Dúvidas? Envie um e-mail para{' '}
            <a href="mailto:support@spitakolus.com" className="underline">
              support@spitakolus.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
