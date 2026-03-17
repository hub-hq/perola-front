import { Link } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";

const steps = [
  "Faça seu cadastro como apoiador para acompanhar as novidades da campanha.",
  "Receba comunicados, convites e materiais para compartilhar no seu ritmo.",
  "Apoie as pautas da Pérola sem precisar estar em todas as ações presenciais.",
];

export default function SejaApoiador() {
  return (
    <main>
      <Boxed maxWidth="xl" padding="none" gap="lg">
        <Boxed
          gap="sm"
          style={{
            borderRadius: "24px",
            border: "1px solid var(--color-border-subtle)",
            background:
              "linear-gradient(135deg, var(--color-accent-gradient-start-soft), var(--color-accent-gradient-end))",
          }}
        >
          <Title level={1}>Seja Apoiador</Title>
          <p>
            Quer apoiar a campanha e acompanhar de perto? Cadastre-se para
            fortalecer essa construção coletiva, mesmo com uma rotina menos
            intensa de mobilização.
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
          <Title level={2}>Como funciona o apoio</Title>
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
            <Link to="/apoiador/cadastro" style={{ flex: "1 1 240px" }}>
              <Button type="button" fullWidth>
                Quero me cadastrar como apoiador
              </Button>
            </Link>

            <Link to="/apoiador/login" style={{ flex: "1 1 240px" }}>
              <Button type="button" variant="outline" fullWidth>
                Já tenho conta de apoiador
              </Button>
            </Link>
          </Boxed>
        </Boxed>
      </Boxed>
    </main>
  );
}
