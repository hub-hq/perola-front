import Boxed from "@/components/Boxed/Boxed";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";

const causes = [
  {
    title: "Saúde Pública",
    description:
      "Defesa do SUS forte, acesso digno ao atendimento e cuidado integral para a população nas periferias.",
  },
  {
    title: "Direitos das Mulheres",
    description:
      "Combate à violência de gênero, autonomia econômica e políticas públicas de proteção e igualdade.",
  },
  {
    title: "Justiça Racial",
    description:
      "Construção de uma cidade antirracista com ações concretas de enfrentamento ao racismo estrutural.",
  },
  {
    title: "Juventude e Cultura",
    description:
      "Valorização da cultura periférica, educação transformadora e oportunidades reais para a juventude sonhar.",
  },
  {
    title: "Participação Popular",
    description:
      "Mandato com escuta ativa, diálogo territorial e construção coletiva das decisões políticas.",
  },
  {
    title: "Cidade Sustentável",
    description:
      "Compromisso com um projeto ecossocialista, com justiça ambiental e desenvolvimento para todas as pessoas.",
  },
];

export default function Causas() {
  return (
    <main>
      <Boxed maxWidth="xl" padding="none" gap="lg">
        <Boxed
          gap="sm"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(100, 108, 255, 0.1), rgba(100, 108, 255, 0.03))",
          }}
        >
          <Title level={1}>Causas que movem nossa caminhada</Title>
          <p>
            Nosso projeto político nasce dos territórios e se orienta pela defesa
            da dignidade, da democracia e da justiça social.
          </p>
        </Boxed>

        <Spacing size="xs" />

        <Boxed direction="row" gap="md" wrap padding="none" align="stretch">
          {causes.map((cause) => (
            <Boxed
              key={cause.title}
              centered={false}
              gap="xs"
              style={{
                flex: "1 1 280px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "18px",
                background: "#ffffff",
              }}
            >
              <Title level={3}>{cause.title}</Title>
              <p style={{ color: "#4b5563" }}>{cause.description}</p>
            </Boxed>
          ))}
        </Boxed>
      </Boxed>
    </main>
  );
}
