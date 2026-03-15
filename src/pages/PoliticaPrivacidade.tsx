import Boxed from "@/components/Boxed/Boxed";
import Spacing from "@/components/Spacing/Spacing";
import Title from "@/components/Title/Title";

export default function PoliticaPrivacidade() {
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <Boxed maxWidth="lg" padding="none" gap="lg">
        <Boxed
          gap="sm"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            background: "#ffffff",
          }}
        >
          <Title level={1}>Política de Privacidade</Title>
          <p>
            Esta página descreve, de forma objetiva, como os dados pessoais são
            tratados nos canais da Instituição Pérola.
          </p>
          <small style={{ color: "#6b7280" }}>Atualizado em {currentYear}</small>
        </Boxed>

        <Boxed gap="md" style={sectionStyle}>
          <Title level={3}>1. Coleta de informações</Title>
          <p>
            Podemos coletar dados fornecidos voluntariamente por você, como nome,
            e-mail e telefone, especialmente em formulários de contato, cadastro
            de ativistas e mobilizações.
          </p>
        </Boxed>

        <Boxed gap="md" style={sectionStyle}>
          <Title level={3}>2. Uso dos dados</Title>
          <p>
            Os dados são utilizados para comunicação institucional, envio de
            informações sobre ações da campanha e organização de atividades com
            participação popular.
          </p>
        </Boxed>

        <Boxed gap="md" style={sectionStyle}>
          <Title level={3}>3. Compartilhamento</Title>
          <p>
            Não comercializamos dados pessoais. O compartilhamento ocorre apenas
            quando necessário para execução de serviços essenciais, sempre com
            medidas de segurança e finalidade legítima.
          </p>
        </Boxed>

        <Boxed gap="md" style={sectionStyle}>
          <Title level={3}>4. Segurança e direitos</Title>
          <p>
            Adotamos boas práticas para proteger as informações e respeitamos os
            direitos previstos na legislação aplicável, incluindo acesso,
            correção e solicitação de exclusão de dados.
          </p>
        </Boxed>

        <Boxed gap="md" style={sectionStyle}>
          <Title level={3}>5. Contato</Title>
          <p>
            Para dúvidas sobre privacidade e tratamento de dados, entre em contato
            por e-mail: contato@instituicaoperola.org.br.
          </p>
        </Boxed>

        <Spacing size="xs" />
      </Boxed>
    </main>
  );
}

const sectionStyle = {
  borderRadius: "20px",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  background: "#ffffff",
};
