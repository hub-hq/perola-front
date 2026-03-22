import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";
import { getAuthenticatedUser, logout } from "@/services/auth";

function SupporterDashboard() {
  const navigate = useNavigate();
  const user = getAuthenticatedUser();

  function handleLogout() {
    logout();
    navigate("/apoiador/login");
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
        <Title level={1}>Área do Apoiador</Title>
        <p>
          {user?.name ? `Olá, ${user.name}!` : "Olá!"} Aqui você recebe atualizações da campanha e
          acompanha como pode contribuir.
        </p>

        <Spacing size="sm" />

        <Title level={3}>Ações rápidas</Title>

        <Boxed direction="row" gap="sm" wrap padding="none" align="center">
          <Link to="/" style={{ flex: "1 1 220px" }}>
            <Button type="button" variant="secondary" fullWidth>
              Ir para Home
            </Button>
          </Link>

          <Link to="/seja-apoiador" style={{ flex: "1 1 220px" }}>
            <Button type="button" variant="outline" fullWidth>
              Ver página de apoio
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

export default SupporterDashboard;
