import { Link } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";

const steps = [
  "Faça seu cadastro e entre na comunidade de ativistas.",
  "Receba mobilizações, conteúdos e materiais da campanha.",
  "Participe das ações e fortaleça a construção coletiva nos territórios.",
];

export default function SejaAtivista() {
  return (
    <main>
      <Boxed maxWidth="xl" padding="none" gap="lg">
        <Boxed
          gap="sm"
          style={{
            borderRadius: "24px",
            border: "1px solid var(--color-border-subtle)",
            background: "linear-gradient(135deg, var(--color-accent-gradient-start), var(--color-accent-gradient-end))",
          }}
        >
          <Title level={1}>Seja Ativista</Title>
          <p>
            Faça parte de uma candidatura popular, antirracista e feminista,
            construída com diálogo, coragem e compromisso com o nosso povo.
          </p>
        </Boxed>

        <Boxed
          gap="md"
          style={{
            borderRadius: "24px",
            border: "1px solid var(--color-border-subtle)",
            background: "var(--color-surface-base)",
          }}
        >
          <Title level={2}>Como participar</Title>
          <Boxed padding="none" gap="sm">
            {steps.map((step, index) => (
              <Boxed key={step} direction="row" align="start" gap="sm" padding="none">
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "9999px",
                    background: "var(--color-accent-soft-strong)",
                    color: "var(--color-brand-primary)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                <p>{step}</p>
              </Boxed>
            ))}
          </Boxed>

          <Spacing size="xs" />

          <Boxed direction="row" gap="sm" wrap padding="none" align="center">
            <Link to="/ativista/cadastro" style={{ flex: "1 1 240px" }}>
              <Button type="button" fullWidth>
                Quero me cadastrar
              </Button>
            </Link>

            <Link to="/ativista/login" style={{ flex: "1 1 240px" }}>
              <Button type="button" variant="outline" fullWidth>
                Já tenho conta
              </Button>
            </Link>
          </Boxed>
        </Boxed>
      </Boxed>
    </main>
  );
}
