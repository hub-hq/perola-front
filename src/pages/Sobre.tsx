import Boxed from "@/components/Boxed/Boxed";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";

export default function Sobre() {
  return (
    <main>
      {/* Apresentação */}
      <Boxed>
        <Title level={1}>EU SOU PÉROLA SAMPAIO</Title>
        <Spacing size="sm" />
        <p>
          Mulher negra nascida e criada na Restinga, em Porto Alegre/RS.
          Minha trajetória é a trajetória do nosso povo: marcada pela luta,
          pela resistência e pela busca por justiça social.
        </p>
        <Spacing size="sm" />
        <p>
          Por uma Porto Alegre <strong>antirracista, feminista e com justiça social</strong>.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Origens */}
      <Boxed>
        <Title level={2}>Origens</Title>
        <Spacing size="md" />
        <p>
          Sou filha de <strong>Tânia Maria dos Santos</strong>, ex-interna da
          antiga FEBEM, empregada doméstica que com muita luta foi aprovada
          em um concurso federal. Desde cedo vivencio as injustiças enfrentadas
          pelo nosso povo — e foi essa vivência que me fez militante.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Formação */}
      <Boxed>
        <Title level={2}>Formação</Title>
        <Spacing size="md" />
        <p>
          Sou formada em <strong>Direito pela PUCRS</strong>, com pós-graduação
          em <strong>Gestão Pública</strong> e <strong>Psicopedagogia</strong>.
          Sempre digo que meu currículo é fruto das políticas sociais
          implementadas pelos governos do PT.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Militância */}
      <Boxed>
        <Title level={2}>Militância e Movimento</Title>
        <Spacing size="md" />

        <Boxed>
          <Title level={3}>Movimento Negro e Estudantil</Title>
          <Spacing size="xs" />
          <p>
            Na universidade, militei no <strong>Movimento Negro Unificado</strong> e
            no <strong>Movimento Estudantil</strong>. Também integrei a Coordenação
            do <strong>I Encontro Nacional da Juventude Negra</strong> no país.
          </p>
        </Boxed>

        <Spacing size="lg" />

        <Boxed>
          <Title level={3}>Conselheira Tutelar (2008–2011)</Title>
          <Spacing size="xs" />
          <p>
            Fui Conselheira Tutelar na gestão 2008/2011, onde percorri as ruas
            da cidade e tive contato com diferentes realidades, me dedicando à
            proteção dos direitos das crianças e adolescentes e pessoas em
            situação de rua.
          </p>
        </Boxed>

        <Spacing size="lg" />

        <Boxed>
          <Title level={3}>Organizações e Coletivos</Title>
          <Spacing size="xs" />
          <p>
            Sou membra da Coordenação da{" "}
            <strong>Associação de Juristas pela Democracia (AJURD)</strong>,
            Coordenadora Estadual do <strong>Instituto EcoVida</strong> e
            militante da <strong>Marcha Mundial das Mulheres</strong>.
          </p>
        </Boxed>
      </Boxed>

      <Spacing size="2xl" />

      {/* Vereança */}
      <Boxed>
        <Title level={2}>Vereança</Title>
        <Spacing size="md" />
        <p>
          Fui vereadora suplente nas legislaturas <strong>2013/2018</strong> e{" "}
          <strong>2017/2020</strong>. Durante a XVII Legislatura, tomei posse em
          22 de outubro de 2019, em substituição ao Vereador Aldacir Oliboni,
          integrando a Comissão de Saúde e Meio Ambiente (COSMAM).
        </p>
        <Spacing size="sm" />
        <p>
          Ao longo da minha atuação na vereança, apresentei{" "}
          <strong>5 projetos</strong>, dos quais <strong>2 foram aprovados</strong>.
          Um deles foi o <strong>Hip Hop nas Escolas</strong> — um tema muito caro
          para mim e para o movimento Hip-Hop que levo comigo.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Projeto político */}
      <Boxed>
        <Title level={2}>Projeto Político</Title>
        <Spacing size="md" />
        <p>
          Nosso projeto político é pautado pelo <strong>diálogo e participação popular</strong>,
          buscando construir uma cidade mais humana, socialmente justa,
          economicamente sustentável e igualitária — onde cada pessoa,
          especialmente nossa juventude, tenha a{" "}
          <strong>oportunidade de sonhar</strong>.
        </p>
        <Spacing size="sm" />
        <p>
          Represento em mim e na minha candidatura diferentes coletivos que têm
          como objetivo romper bloqueios e dar voz aos excluídos, construindo
          uma cidade <strong>antirracista, feminista, ecossocialista</strong> e
          com <strong>justiça social</strong> para o nosso povo.
        </p>
      </Boxed>

      <Spacing size="2xl" />

      {/* Bandeiras */}
      <Boxed>
        <Title level={2}>Bandeiras e Causas</Title>
        <Spacing size="md" />
        <ul>
          <li>Porto Alegre antirracista, feminista e com justiça social</li>
          <li>Saúde pública e acesso universal ao SUS</li>
          <li>Direitos das mulheres e combate à violência doméstica</li>
          <li>Inclusão social e políticas para populações vulneráveis</li>
          <li>Participação popular e democracia de base</li>
          <li>Meio ambiente e ecossocialismo</li>
          <li>Cultura periférica — Hip Hop, movimentos de base</li>
          <li>Direitos humanos e proteção da infância e adolescência</li>
        </ul>
      </Boxed>

      <Spacing size="2xl" />

      {/* Contato / Redes */}
      <Boxed>
        <Title level={2}>Faça Parte dessa Luta</Title>
        <Spacing size="sm" />
        <p>
          {/* TODO: Preencher com canais de contato reais (redes sociais, e-mail, WhatsApp) */}
          Acompanhe o trabalho da Pérola nas redes sociais e entre em contato
          para construirmos juntos uma candidatura que busca justiça para o
          nosso povo.
        </p>
      </Boxed>
    </main>
  );
}

