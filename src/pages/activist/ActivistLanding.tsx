import { Link } from "react-router-dom";
import { Boxed, Button, Title } from "@/components";

function ActivistLanding() {
  return (
    <main>
      <Boxed maxWidth="md" gap="lg" padding="none">
        <Title level={1}>Área do Ativista</Title>
        <p>
          Participe da comunidade, acompanhe suas ações e fortaleça as campanhas.
        </p>

        <Boxed
          gap="sm"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "20px",
            background: "#ffffff",
          }}
        >
          <Title level={3}>Já possui conta?</Title>
          <p>Acesse para acompanhar ações, eventos e mobilizações.</p>
          <Link to="/ativista/login" style={{ width: "100%" }}>
            <Button type="button" fullWidth>
              Entrar
            </Button>
          </Link>
        </Boxed>

        <Boxed
          gap="sm"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "20px",
            background: "#ffffff",
          }}
        >
          <Title level={3}>Novo por aqui?</Title>
          <p>Crie sua conta e venha construir essa luta com a gente.</p>
          <Link to="/ativista/cadastro" style={{ width: "100%" }}>
            <Button type="button" variant="outline" fullWidth>
              Criar conta
            </Button>
          </Link>
        </Boxed>
      </Boxed>
    </main>
  );
}

export default ActivistLanding;
