import { Boxed, CheckBoxInput, Spacing, Title } from "@/components";

export function AdminSettingsModule() {
  return (
    <section className="admin-module">
      <Boxed padding="none" gap="sm">
        <h3 className="admin-module__title">Configuracoes</h3>
        <p className="admin-module__description">
          Preferencias administrativas para notificacoes, alertas e operacao do painel.
        </p>
      </Boxed>

      <Boxed className="admin-module-card" gap="sm">
        <Title level={3}>Preferencias do painel</Title>

        <Boxed direction="row" align="center" gap="xs" padding="none">
          <CheckBoxInput id="admin-setting-email-alert" defaultChecked />
          <label htmlFor="admin-setting-email-alert">Receber alertas de novos cadastros por e-mail</label>
        </Boxed>

        <Spacing size="xxs" />

        <Boxed direction="row" align="center" gap="xs" padding="none">
          <CheckBoxInput id="admin-setting-weekly-report" defaultChecked />
          <label htmlFor="admin-setting-weekly-report">Gerar relatorio semanal automatico</label>
        </Boxed>

        <Spacing size="xxs" />

        <Boxed direction="row" align="center" gap="xs" padding="none">
          <CheckBoxInput id="admin-setting-anomaly-alert" />
          <label htmlFor="admin-setting-anomaly-alert">Ativar alertas de comportamento fora do padrao</label>
        </Boxed>
      </Boxed>
    </section>
  );
}
