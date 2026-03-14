import { Link } from "react-router-dom";
import Boxed from "@/components/Boxed/Boxed";
import Button from "@/components/Button/Button";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";

function ActivistLanding() {
  return (
    <main>
      <Boxed>
        <Title level={1}>Área do Ativista</Title>
        <Spacing size="sm" />
        <p>
          Participe da comunidade, acompanhe suas ações e fortaleça as campanhas.
        </p>

        <Spacing size="xl" />

        <Boxed>
          <Title level={3}>Já possui conta?</Title>
          <Spacing size="xs" />
          <Link to="/ativista/login">
            <Button type="button">Entrar</Button>
          </Link>
        </Boxed>

        <Spacing size="lg" />

        <Boxed>
          <Title level={3}>Novo por aqui?</Title>
          <Spacing size="xs" />
          <Link to="/ativista/cadastro">
            <Button type="button" variant="outline">
              Criar conta
            </Button>
          </Link>
        </Boxed>
      </Boxed>
    </main>
  );
}

export default ActivistLanding;
