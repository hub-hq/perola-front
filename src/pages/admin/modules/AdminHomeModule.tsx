import { Boxed, Title } from "@/components";

const kpis = [
  { label: "Apoiadores cadastrados", value: "4.820" },
  { label: "Ativistas cadastrados", value: "386" },
  { label: "Seguidores no Instagram", value: "73.400" },
  { label: "Media de indicacoes/ativista", value: "3,8" },
];

const monthlyGrowth = [
  { label: "Jan", value: 48 },
  { label: "Fev", value: 52 },
  { label: "Mar", value: 58 },
  { label: "Abr", value: 64 },
  { label: "Mai", value: 71 },
  { label: "Jun", value: 77 },
];

export function AdminHomeModule() {
  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Home</h3>
        <p className="admin-module__description">
          Bem-vindo ao painel administrativo. Esses indicadores usam dados mock para orientar a leitura inicial do time.
        </p>
      </Boxed>

      <Boxed padding="none" gap="md">
        <div className="admin-kpi-grid">
          {kpis.map((kpi) => (
            <article key={kpi.label} className="admin-kpi-item">
              <p className="admin-kpi-label">{kpi.label}</p>
              <p className="admin-kpi-value">{kpi.value}</p>
            </article>
          ))}
        </div>

        <Boxed className="admin-module-card" gap="sm">
          <Title level={3}>Crescimento de apoiadores por mes (mock)</Title>
          <div className="admin-chart" role="img" aria-label="Grafico de barras de crescimento de apoiadores por mes">
            {monthlyGrowth.map((item) => (
              <div key={item.label} className="admin-chart__bar-group">
                <div className="admin-chart__bar" style={{ height: `${item.value * 2}px` }} />
                <span className="admin-chart__label">{item.label}</span>
              </div>
            ))}
          </div>
        </Boxed>
      </Boxed>
    </section>
  );
}
