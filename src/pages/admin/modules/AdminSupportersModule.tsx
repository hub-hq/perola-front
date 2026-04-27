import { Boxed, Button, Title } from "@/components";

const supporterSegments = [
  { segment: "Engajados na semana", total: 1420 },
  { segment: "Novos apoiadores (30d)", total: 318 },
  { segment: "Sem codigo de indicacao", total: 127 },
];

export function AdminSupportersModule() {
  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Apoiadores</h3>
        <p className="admin-module__description">
          Acompanhe o comportamento da base de apoiadores para orientar a estrategia de relacionamento.
        </p>
      </Boxed>

      <Boxed className="admin-module-card" gap="sm">
        <Boxed direction="row" justify="between" align="center" wrap padding="none" gap="sm">
          <Title level={3}>Resumo da base</Title>
          <Boxed direction="row" padding="none" gap="xs" wrap>
            <Button type="button" variant="outline">Importar lista</Button>
            <Button type="button">Novo apoiador</Button>
          </Boxed>
        </Boxed>

        <div className="admin-kpi-grid">
          {supporterSegments.map((item) => (
            <article key={item.segment} className="admin-kpi-item">
              <p className="admin-kpi-label">{item.segment}</p>
              <p className="admin-kpi-value">{item.total}</p>
            </article>
          ))}
        </div>
      </Boxed>
    </section>
  );
}
