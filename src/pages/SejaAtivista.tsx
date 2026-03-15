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
            border: "1px solid rgba(0, 0, 0, 0.08)",
            background: "linear-gradient(135deg, rgba(100, 108, 255, 0.12), rgba(100, 108, 255, 0.03))",
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
            border: "1px solid rgba(0, 0, 0, 0.08)",
            background: "#ffffff",
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
                    background: "rgba(100, 108, 255, 0.12)",
                    color: "#646cff",
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
