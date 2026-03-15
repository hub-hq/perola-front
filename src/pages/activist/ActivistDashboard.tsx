import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";
import { logout } from "@/services/auth";

function ActivistDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/ativista/login");
  }

  return (
    <main>
      <Boxed
        maxWidth="md"
        gap="md"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: "24px",
          background: "#ffffff",
        }}
      >
        <Title level={1}>Dashboard do Ativista</Title>
        <p>Bem-vindo(a)! Esta é sua área para acompanhar e fortalecer as ações da campanha.</p>

        <Spacing size="sm" />

        <Title level={3}>Ações rápidas</Title>

        <Boxed direction="row" gap="sm" wrap padding="none" align="center">
          <Link to="/" style={{ flex: "1 1 220px" }}>
            <Button type="button" variant="secondary" fullWidth>
              Ir para Home
            </Button>
          </Link>

          <Button
            type="button"
            variant="outline"
            onClick={handleLogout}
            style={{ flex: "1 1 220px" }}
          >
            Sair
          </Button>
        </Boxed>
      </Boxed>
    </main>
  );
}

export default ActivistDashboard;
