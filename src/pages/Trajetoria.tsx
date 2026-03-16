import { Boxed, Spacing, Title } from "@/components";

type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
};

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

        <Boxed padding="none" gap="md">
          {milestones.map((item) => (
            <Boxed
              key={`${item.year}-${item.title}`}
              direction="row"
              align="stretch"
              gap="md"
              style={{
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "20px",
                background: "var(--color-surface-base)",
              }}
            >
              <Boxed
                maxWidth="xs"
                centered={false}
                gap="xs"
                style={{
                  minWidth: "140px",
                  borderRight: "1px solid var(--color-border-subtle)",
                }}
              >
                <strong style={{ color: "var(--color-brand-primary)", fontSize: "1.4rem" }}>
                  {item.year}
                </strong>
                <span
                  style={{
                    display: "inline-flex",
                    width: "42px",
                    height: "42px",
                    borderRadius: "9999px",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--color-accent-soft-strong)",
                    fontSize: "1.15rem",
                  }}
                  aria-hidden
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    border: "1px solid var(--color-border-accent)",
                    borderRadius: "9999px",
                    padding: "4px 10px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {item.badge}
                </span>
              </Boxed>

              <Boxed centered={false} gap="xs" style={{ flex: 1 }}>
                <Title level={3}>{item.title}</Title>
                <p style={{ color: "var(--color-text-secondary)" }}>{item.description}</p>

                <Boxed
                  padding="sm"
                  centered={false}
                  style={{
                    borderRadius: "12px",
                    border: "1px dashed var(--color-border-soft)",
                    background: "var(--color-surface-soft)",
                    maxWidth: "220px",
                  }}
                >
                  <small style={{ color: "var(--color-text-tertiary)" }}>
                    Foto/registro deste marco (placeholder)
                  </small>
                </Boxed>
              </Boxed>
            </Boxed>
          ))}
        </Boxed>

        <Spacing size="xs" />
      </Boxed>
    </main>
  );
}
