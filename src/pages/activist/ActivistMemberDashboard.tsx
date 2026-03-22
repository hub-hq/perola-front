import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";
import { getAuthenticatedUser, logout } from "@/services/auth";

function ActivistMemberDashboard() {
  const navigate = useNavigate();
  const user = getAuthenticatedUser();

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
          border: "1px solid var(--color-border-subtle)",
          borderRadius: "24px",
          background: "var(--color-surface-base)",
        }}
      >
        <Title level={1}>Área do Ativista</Title>
        <p>
          {user?.name ? `Olá, ${user.name}!` : "Olá!"} Aqui você acompanha sua participação,
          acessa materiais e fortalece sua mobilização.
        </p>

        <Spacing size="sm" />

        <Title level={3}>Atalhos</Title>

        <Boxed direction="row" gap="sm" wrap padding="none" align="center">
          <Link to="/" style={{ flex: "1 1 220px" }}>
            <Button type="button" variant="secondary" fullWidth>
              Ir para Home
            </Button>
          </Link>

          <Link to="/admin/dashboard" style={{ flex: "1 1 220px" }}>
            <Button type="button" variant="outline" fullWidth>
              Ver painel administrativo
            </Button>
          </Link>

          <Button type="button" variant="outline" onClick={handleLogout} style={{ flex: "1 1 220px" }}>
            Sair
          </Button>
        </Boxed>
      </Boxed>
    </main>
  );
}

export default ActivistMemberDashboard;
