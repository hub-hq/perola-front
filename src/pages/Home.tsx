import { Link } from "react-router-dom";
import { Boxed, CTA, Spacing, Title } from "@/components";

export default function Home() {
  const priorities = [
    "Saúde pública e fortalecimento do SUS",
    "Direitos das mulheres e enfrentamento à violência",
    "Participação popular e democracia de base",
    "Juventude, cultura periférica e oportunidade de sonhar",
  ];

  const commitments = [
    "Candidatura construída com diálogo, escuta e presença nos territórios.",
    "Defesa de uma cidade antirracista, feminista e com justiça social.",
    "Atuação conectada com movimentos populares, coletivos e comunidades.",
  ];

  return (
    <main>
      {/* HERO */}
      <section>
        <Boxed
          maxWidth="xl"
          padding="xl"
          gap="lg"
          style={{
            borderRadius: "32px",
            background:
              "linear-gradient(135deg, var(--color-accent-gradient-start), var(--color-accent-gradient-end))",
            border: "1px solid var(--color-border-subtle)",
          }}
        >
          <Boxed maxWidth="md" padding="none" gap="md" centered={false}>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
              }}
            >
              Por uma Porto Alegre antirracista, feminista e com justiça social
            </p>

            <Title level={1}>Pérola Sampaio</Title>

            <p style={{ margin: 0, fontSize: "1.1rem", color: "var(--color-text-secondary)" }}>
              Um projeto político construído com participação popular, compromisso
              com os territórios e defesa inegociável da dignidade do nosso povo.
            </p>

            <Boxed direction="row" gap="sm" wrap padding="none" align="center">
              <Link
                to="/sobre"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "9999px",
                  background: "var(--color-brand-primary)",
                  color: "var(--color-text-inverse)",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Conheça a trajetória
              </Link>

              <Link
                to="/seja-ativista"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "9999px",
                  background: "var(--color-surface-base)",
                  color: "var(--color-text-heading)",
                  border: "1px solid var(--color-border-soft)",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Seja ativista
              </Link>
            </Boxed>
          </Boxed>

          <Boxed direction="row" gap="xs" wrap padding="none" align="center">
            <span style={pillStyle}>Mulheres</span>
            <span style={pillStyle}>Justiça Social</span>
            <span style={pillStyle}>Participação Popular</span>
            <span style={pillStyle}>Juventude</span>
            <span style={pillStyle}>Direitos Humanos</span>
          </Boxed>
        </Boxed>
      </section>

      <Spacing size="2xl" />

      {/* PROPOSTAS */}
      <section>
        <Boxed maxWidth="xl" padding="none" gap="lg">
          <Boxed padding="none" gap="sm">
            <Title level={2}>Prioridades do projeto</Title>
            <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
              Um mandato comprometido com quem vive a cidade de verdade, com foco
              em políticas públicas que transformem a vida nas periferias e nos
              territórios populares.
            </p>
          </Boxed>

          <Boxed direction="row" gap="md" wrap padding="none" align="stretch">
            {priorities.map((item) => (
              <Boxed
                key={item}
                maxWidth="sm"
                centered={false}
                gap="xs"
                style={{
                  flex: "1 1 220px",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "20px",
                  background: "var(--color-surface-base)",
                }}
              >
                <strong style={{ fontSize: "1rem", lineHeight: 1.4 }}>{item}</strong>
                <p style={{ margin: 0, color: "var(--color-text-tertiary)" }}>
                  Compromisso com uma cidade mais humana, democrática e igualitária.
                </p>
              </Boxed>
            ))}
          </Boxed>
        </Boxed>
      </section>

      <Spacing size="2xl" />

      {/* COMPROMISSOS */}
      <section>
        <Boxed
          maxWidth="xl"
          gap="lg"
          style={{
            border: "1px solid var(--color-border-subtle)",
            borderRadius: "24px",
            background: "var(--color-surface-overlay)",
          }}
        >
          <Title level={2}>Como esse projeto se constrói</Title>

          <Boxed padding="none" gap="md">
            {commitments.map((item, index) => (
              <Boxed
                key={item}
                direction="row"
                align="start"
                gap="sm"
                padding="none"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "9999px",
                    background: "var(--color-accent-soft-strong)",
                    color: "var(--color-brand-primary)",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>

                <p style={{ margin: 0, color: "var(--color-text-body)" }}>{item}</p>
              </Boxed>
            ))}
          </Boxed>
        </Boxed>
      </section>

      <Spacing size="2xl" />

      {/* SEJA ATIVISTA */}
      <section>
        <Boxed maxWidth="xl" padding="none">
          <CTA
            title="Quer fazer parte dessa mudança?"
            description="Cadastre-se como ativista e participe ativamente da construção de um projeto político com diálogo, participação popular e justiça social."
            actions={[
              {
                label: "Quero ser ativista",
                href: "/seja-ativista",
                variant: "primary",
              },
              {
                label: "Conheça a trajetória",
                href: "/trajetoria",
                variant: "secondary",
              },
            ]}
          />
        </Boxed>
      </section>
    </main>
  );
}

const pillStyle = {
  border: "1px solid var(--color-border-accent)",
  borderRadius: "9999px",
  padding: "6px 12px",
  fontSize: "0.85rem",
  fontWeight: 600,
};
