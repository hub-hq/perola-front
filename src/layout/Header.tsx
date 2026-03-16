import { Link } from "react-router-dom";
import { Boxed } from "@/components";

const navItemStyle = {
  fontWeight: 600,
  fontSize: "0.95rem",
};

const pillStyle = {
  border: "1px solid var(--color-border-brand-soft)",
  borderRadius: "9999px",
  padding: "6px 12px",
  fontSize: "0.85rem",
};

export function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid var(--color-border-subtle)",
        background: "var(--color-bg-surface-soft)",
      }}
    >
      <Boxed maxWidth="xl" padding="lg" gap="md">
        <Boxed
          direction="row"
          align="center"
          justify="between"
          wrap
          gap="sm"
          padding="none"
        >
          <Link to="/" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
            Pérola {currentYear}
          </Link>

          <nav aria-label="Navegação principal">
            <Boxed direction="row" gap="md" align="center" wrap padding="none">
              <Link to="/sobre" style={navItemStyle}>
                Sobre
              </Link>
              <Link to="/seja-ativista" style={navItemStyle}>
                Seja Ativista
              </Link>
              <Link to="/politica-privacidade" style={navItemStyle}>
                Privacidade
              </Link>
            </Boxed>
          </nav>
        </Boxed>

        <Boxed
          padding="md"
          gap="sm"
          style={{
            border: "1px solid var(--color-border-subtle)",
            borderRadius: "16px",
            background: "var(--color-bg-brand-soft)",
          }}
        >
          <strong style={{ fontSize: "1.05rem" }}>
            Pérola Sampaio — Pré-candidata a Deputada Federal
          </strong>
          <p>
            Campanha participativa com foco em saúde pública, direitos das
            mulheres, inclusão social e participação popular.
          </p>
          <Boxed direction="row" gap="sm" wrap padding="none">
            <Link to="/seja-ativista">Quero apoiar</Link>
            <Link to="/sobre">Conheça a trajetória</Link>
          </Boxed>
        </Boxed>

        <Boxed direction="row" gap="xs" wrap padding="none" align="center">
          <span style={pillStyle}>Saúde Pública</span>
          <span style={pillStyle}>Direitos das Mulheres</span>
          <span style={pillStyle}>Inclusão Social</span>
          <span style={pillStyle}>Participação Popular</span>
          <span style={pillStyle}>Direitos Humanos</span>
        </Boxed>
      </Boxed>
    </header>
  );
}
