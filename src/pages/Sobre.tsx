import Boxed from "@/components/Boxed/Boxed";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";

export default function Sobre() {
  return (
    <main>
      {/* Apresentação */}
      <Boxed>
        <Title level={1}>Quem é Pérola</Title>
        <Spacing size="sm" />
        <p>
          Thais Maria Ferreira Sampaio, conhecida como Pérola Sampaio, nasceu
          em 21 de setembro de 1979, em Porto Alegre/RS. Advogada de formação,
          é militante histórica do Partido dos Trabalhadores (PT) e uma das
          vozes comprometidas com a luta por direitos, equidade e
          representatividade na política gaúcha.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Trajetória política */}
      <Boxed>
        <Title level={2}>Trajetória Política</Title>
        <Spacing size="md" />

        <Boxed>
          <Title level={3}>Origens e militância</Title>
          <Spacing size="xs" />
          <p>
            Filha de Luiz Sampaio e Tania Maria Ferreira dos Santos, Pérola
            cresceu em Porto Alegre e desde cedo se envolveu com movimentos
            sociais e organizações comunitárias. Sua trajetória é marcada pelo
            engajamento popular e pela atuação em comunidades periféricas,
            articulando movimentos sociais urbanos e pautas de direitos humanos.
          </p>
        </Boxed>

        <Spacing size="lg" />

        <Boxed>
          <Title level={3}>Filiação ao PT e atuação partidária</Title>
          <Spacing size="xs" />
          <p>
            Militante histórica do PT em Porto Alegre, Pérola encontrou no
            Partido dos Trabalhadores o espaço para transformar sua militância
            de base em ação política concreta. Participou ativamente de
            conselhos e organizações comunitárias, construindo pontes entre a
            comunidade e o poder público, com foco em inclusão social,
            participação popular e políticas públicas para mulheres.
          </p>
        </Boxed>

        <Spacing size="lg" />

        <Boxed>
          <Title level={3}>Mandato de Vereadora — XVII Legislatura</Title>
          <Spacing size="xs" />
          <p>
            Pérola elegeu-se como 9ª suplente para a XVII Legislatura da
            Câmara Municipal de Porto Alegre, com 1.186 votos, pela legenda
            do PT. Tomou posse da Vereança em 22 de outubro de 2019, em
            substituição ao Vereador Aldacir Oliboni, exercendo o mandato
            até 27 de outubro de 2019.
          </p>
          <Spacing size="xs" />
          <p>
            Durante o mandato, integrou a Comissão de Saúde e Meio Ambiente
            (COSMAM), reforçando sua atuação nas pautas de saúde pública,
            meio ambiente e políticas sociais.
          </p>
        </Boxed>
      </Boxed>

      <Spacing size="2xl" />

      {/* Bandeiras */}
      <Boxed>
        <Title level={2}>Bandeiras e Causas</Title>
        <Spacing size="md" />
        <ul>
          <li>Saúde pública e acesso universal ao SUS</li>
          <li>Direitos das mulheres e combate à violência doméstica</li>
          <li>Inclusão social e políticas para populações vulneráveis</li>
          <li>Participação popular e democracia de base</li>
          <li>Apoio a movimentos comunitários e periféricos</li>
          <li>Meio ambiente e cidades sustentáveis</li>
          <li>Direitos humanos e justiça social</li>
        </ul>
      </Boxed>

      <Spacing size="2xl" />

      {/* Contato / Redes */}
      <Boxed>
        <Title level={2}>Fale com a Pérola</Title>
        <Spacing size="sm" />
        <p>
          {/* TODO: Preencher com canais de contato reais (redes sociais, e-mail, gabinete) */}
          Acompanhe o trabalho da Pérola nas redes sociais e entre em contato
          pelo gabinete da Câmara Municipal de Porto Alegre.
        </p>
      </Boxed>
    </main>
  );
}

