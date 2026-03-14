import { Link, useNavigate } from "react-router-dom";
import Boxed from "@/components/Boxed/Boxed";
import Button from "@/components/Button/Button";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";
import { logout } from "@/services/auth";

function ActivistDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/ativista/login");
  }

  return (
    <main>
      <Boxed>
        <Title level={1}>Dashboard do Ativista</Title>
        <Spacing size="sm" />
        <p>Bem-vindo(a)! Este é um boilerplate inicial da área autenticada.</p>

        <Spacing size="xl" />

        <Title level={3}>Ações rápidas</Title>
        <Spacing size="sm" />

        <Boxed>
          <Link to="/">
            <Button type="button" variant="secondary">
              Ir para Home
            </Button>
          </Link>
          <Spacing size="sm" direction="horizontal" />
          <Button type="button" variant="outline" onClick={handleLogout}>
            Sair
          </Button>
        </Boxed>
      </Boxed>
    </main>
  );
}

export default ActivistDashboard;
