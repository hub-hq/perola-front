import { useEffect, useState } from "react";
import { Boxed, Spacing, Title } from "@/components";
import { getReferralMetrics, type ReferralMetricsResponse } from "@/services/supporters";

type AdminOldModuleProps = {
  isMockSession: boolean;
};

export function AdminOldModule({ isMockSession }: AdminOldModuleProps) {
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

  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Old</h3>
        <p className="admin-module__description">
          Modulo legado com o conteudo original do dashboard administrativo.
        </p>
      </Boxed>

      {isMockSession ? (
        <Boxed
          centered={false}
          gap="xxs"
          className="admin-module-card"
          style={{ borderStyle: "dashed" }}
        >
          <strong style={{ fontSize: "0.9rem" }}>Ambiente de demonstracao</strong>
          <small style={{ color: "var(--color-text-tertiary)" }}>
            Sessao mock ativa para testes de navegacao e dashboard.
          </small>
        </Boxed>
      ) : null}

      <Boxed className="admin-module-card" gap="sm">
        <Title level={3}>Metricas de indicacao</Title>

        {isLoadingMetrics ? <p>Carregando metricas...</p> : null}

        {metricsError ? <p style={{ color: "var(--color-feedback-error)", fontWeight: 600 }}>{metricsError}</p> : null}

        {metrics ? (
          <>
            {metrics.isDemoData ? (
              <small style={{ color: "var(--color-text-tertiary)", fontWeight: 600 }}>
                Exibindo dados de demonstracao ate a API de metricas ficar disponivel.
              </small>
            ) : null}

            <Boxed direction="row" gap="sm" wrap padding="none" align="stretch">
              <Boxed centered={false} gap="xxs" className="admin-kpi-item" style={{ flex: "1 1 180px" }}>
                <strong>Total de apoiadores</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.totalSupporters}</p>
              </Boxed>

              <Boxed centered={false} gap="xxs" className="admin-kpi-item" style={{ flex: "1 1 180px" }}>
                <strong>Com codigo de indicacao</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.withReferral}</p>
              </Boxed>

              <Boxed centered={false} gap="xxs" className="admin-kpi-item" style={{ flex: "1 1 180px" }}>
                <strong>Sem codigo de indicacao</strong>
                <p style={{ fontSize: "1.35rem", fontWeight: 800 }}>{metrics.withoutReferral}</p>
              </Boxed>
            </Boxed>

            <Spacing size="xs" />

            <strong>Ranking por referredByActivistCode</strong>

            {metrics.byCode.length > 0 ? (
              <Boxed padding="none" gap="xs">
                {metrics.byCode.slice(0, 10).map((item, index) => (
                  <Boxed
                    key={item.code}
                    direction="row"
                    align="center"
                    justify="between"
                    padding="sm"
                    className="admin-module-card"
                    style={{ borderRadius: "12px" }}
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
          </>
        ) : null}
      </Boxed>
    </section>
  );
}
