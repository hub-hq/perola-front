import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, Spacing, Title } from "@/components";
import { getAuthenticatedUser, logout } from "@/services/auth";
import { getReferralMetrics, type ReferralMetricsResponse } from "@/services/supporters";

function AdminDashboard() {
  const navigate = useNavigate();
  const authenticatedUser = getAuthenticatedUser();
  const isMockSession = authenticatedUser?.isMock === true;
  const [metrics, setMetrics] = useState<ReferralMetricsResponse | null>(null);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [metricsError, setMetricsError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadMetrics() {
      setIsLoadingMetrics(true);
      setMetricsError("");

      try {
        const data = await getReferralMetrics();
        if (isMounted) setMetrics(data);
      } catch {
        if (isMounted) {
          setMetricsError("Nao foi possivel carregar as metricas de indicacao.");
        }
      } finally {
        if (isMounted) setIsLoadingMetrics(false);
      }
    }

    loadMetrics();

    return () => {
      isMounted = false;
    };
  }, []);

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
        <Title level={1}>Dashboard Administrativo</Title>
        <p>Bem-vindo(a)! Esta e a area administrativa para acompanhar os indicadores da campanha.</p>

        {isMockSession ? (
          <Boxed
            centered={false}
            gap="xxs"
            style={{
              border: "1px dashed var(--color-border-soft)",
              borderRadius: "12px",
              background: "var(--color-surface-soft)",
            }}
          >
            <strong style={{ fontSize: "0.9rem" }}>Ambiente de demonstracao</strong>
            <small style={{ color: "var(--color-text-tertiary)" }}>
              Sessao mock ativa para testes de navegacao e dashboard.
            </small>
          </Boxed>
        ) : null}

        <Spacing size="sm" />

        <Title level={3}>Metricas de indicacao</Title>

        {isLoadingMetrics ? <p>Carregando metricas...</p> : null}

        {metricsError ? (
          <p style={{ color: "var(--color-feedback-error)", fontWeight: 600 }}>{metricsError}</p>
        ) : null}

        {metrics ? (
          <Boxed
            gap="sm"
            style={{
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "16px",
              background: "var(--color-surface-soft)",
            }}
          >
            {metrics.isDemoData ? (
              <small style={{ color: "var(--color-text-tertiary)", fontWeight: 600 }}>
                Exibindo dados de demonstracao ate a API de metricas ficar disponivel.
              </small>
            ) : null}

            <Boxed direction="row" gap="sm" wrap padding="none" align="stretch">
              <Boxed
                centered={false}
                gap="xxs"
                style={{
                  flex: "1 1 180px",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "12px",
                  background: "var(--color-surface-base)",
                }}
              >
                <strong>Total de apoiadores</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.totalSupporters}</p>
              </Boxed>

              <Boxed
                centered={false}
                gap="xxs"
                style={{
                  flex: "1 1 180px",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "12px",
                  background: "var(--color-surface-base)",
                }}
              >
                <strong>Com codigo de indicacao</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.withReferral}</p>
              </Boxed>

              <Boxed
                centered={false}
                gap="xxs"
                style={{
                  flex: "1 1 180px",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "12px",
                  background: "var(--color-surface-base)",
                }}
              >
                <strong>Sem codigo de indicacao</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.withoutReferral}</p>
              </Boxed>
            </Boxed>

            <Spacing size="xs" />

            <strong>Ranking por `referredByActivistCode`</strong>

            {metrics.byCode.length > 0 ? (
              <Boxed padding="none" gap="xs">
                {metrics.byCode.slice(0, 10).map((item, index) => (
                  <Boxed
                    key={item.code}
                    direction="row"
                    align="center"
                    justify="between"
                    padding="sm"
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--color-border-subtle)",
                      background: "var(--color-surface-base)",
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>
                      {index + 1}. {item.code}
                    </span>
                    <span style={{ fontWeight: 800 }}>{item.total} apoiadores</span>
                  </Boxed>
                ))}
              </Boxed>
            ) : (
              <p>Ainda nao existem apoiadores vinculados por codigo.</p>
            )}
          </Boxed>
        ) : null}

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

export default AdminDashboard;
