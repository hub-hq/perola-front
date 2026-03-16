import { Boxed, Spacing, Timeline, Title } from "@/components";
import type { TimelineMilestone } from "@/components";

const milestones: TimelineMilestone[] = [
  {
    year: "2004",
    title: "Primeiros passos na militância comunitária",
    description:
      "Participação em coletivos de bairro e ações de base voltadas para juventude, educação popular e direitos humanos.",
    badge: "Território",
    icon: "✊🏿",
  },
  {
    year: "2008",
    title: "Conselheira Tutelar",
    description:
      "Atuação direta na defesa dos direitos de crianças e adolescentes, com presença nas escolas e nas periferias.",
    badge: "Direitos",
    icon: "⚖️",
  },
  {
    year: "2012",
    title: "Formação e incidência política",
    description:
      "Consolidação da trajetória no campo jurídico e da gestão pública, fortalecendo atuação institucional e social.",
    badge: "Formação",
    icon: "🎓",
  },
  {
    year: "2019",
    title: "Experiência na vereança",
    description:
      "Passagem pela Câmara Municipal com foco em saúde, participação popular e políticas públicas para quem mais precisa.",
    badge: "Mandato",
    icon: "🏛️",
  },
  {
    year: "2022",
    title: "Articulação de movimentos e coletivos",
    description:
      "Integração com organizações de mulheres, movimento negro e redes de apoio nos territórios de Porto Alegre.",
    badge: "Movimentos",
    icon: "🤝🏾",
  },
  {
    year: "2026",
    title: "Projeto político em expansão",
    description:
      "Construção de uma proposta antirracista, feminista e com justiça social, conectada às lutas reais do povo.",
    badge: "Futuro",
    icon: "🚩",
  },
];

export default function Trajetoria() {
  return (
    <main>
      <Boxed maxWidth="xl" padding="none" gap="lg">
        <Boxed
          gap="sm"
          style={{
            border: "1px solid var(--color-border-subtle)",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, var(--color-accent-gradient-start-soft), var(--color-accent-gradient-end))",
          }}
        >
          <Title level={1}>Trajetória da Pérola</Title>
          <p>
            Linha do tempo inicial com marcos fictícios para estrutura visual.
            Quando você definir os marcos reais, é só substituir os conteúdos.
          </p>
        </Boxed>

        <Timeline milestones={milestones} />

        <Spacing size="xs" />
      </Boxed>
    </main>
  );
}
