import { Boxed, Button, Title } from "@/components";

const reports = [
  { name: "Base de apoiadores", period: "Ultimos 30 dias", status: "Pronto" },
  { name: "Desempenho por codigo", period: "Ultimos 7 dias", status: "Pronto" },
  { name: "Leads por bairro", period: "Mes atual", status: "Processando" },
];

export function AdminReportsModule() {
  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Relatorios</h3>
        <p className="admin-module__description">
          Gere e acompanhe exportacoes para analise da campanha, mobilizacao e tomada de decisao.
        </p>
      </Boxed>

      <Boxed className="admin-module-card" gap="sm">
        <Boxed direction="row" justify="between" align="center" wrap padding="none" gap="sm">
          <Title level={3}>Relatorios disponiveis</Title>
          <Button type="button">Gerar novo relatorio</Button>
        </Boxed>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Relatorio</th>
                <th>Periodo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.name}>
                  <td>{report.name}</td>
                  <td>{report.period}</td>
                  <td>
                    <span className="admin-pill">{report.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Boxed>
    </section>
  );
}
