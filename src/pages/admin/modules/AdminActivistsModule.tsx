import { Boxed, Button, Title } from "@/components";

const activistsByRegion = [
  { region: "Zona Norte", total: 82, status: "Em alta" },
  { region: "Zona Sul", total: 64, status: "Estavel" },
  { region: "Centro", total: 39, status: "Em alta" },
  { region: "Leste", total: 51, status: "Atenção" },
];

export function AdminActivistsModule() {
  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Ativistas</h3>
        <p className="admin-module__description">
          Gestao da rede de ativistas, cobertura territorial e status de mobilizacao por regiao.
        </p>
      </Boxed>

      <Boxed className="admin-module-card" gap="sm">
        <Boxed direction="row" justify="between" align="center" wrap padding="none" gap="sm">
          <Title level={3}>Rede ativa por regiao</Title>
          <Button type="button" variant="outline">Exportar mapa</Button>
        </Boxed>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Regiao</th>
                <th>Total de ativistas</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activistsByRegion.map((item) => (
                <tr key={item.region}>
                  <td>{item.region}</td>
                  <td>{item.total}</td>
                  <td>
                    <span className="admin-pill">{item.status}</span>
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
