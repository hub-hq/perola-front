import { Link } from "react-router-dom";
import { Boxed } from "@/components";
import "@/styles/layouts/header.scss";

export function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="site-header">
      <Boxed maxWidth="xl" padding="lg" gap="md">
        <Boxed
          direction="row"
          align="center"
          wrap
          gap="sm"
          padding="none"
          className="site-header__top"
        >
          <Link to="/" className="site-header__brand-link">
            Pérola {currentYear}
          </Link>

          <nav aria-label="Navegação principal" className="site-header__nav">
            <Boxed direction="row" gap="md" align="center" wrap padding="none">
              <Link to="/sobre" className="site-header__nav-item">
                Sobre
              </Link>
              <Link to="/trajetoria" className="site-header__nav-item">
                Trajetória
              </Link>
              <Link to="/seja-apoiador" className="site-header__nav-item">
                Seja Apoiador
              </Link>
            </Boxed>
          </nav>
        </Boxed>

        <Boxed
          padding="md"
          gap="sm"
          className="site-header__campaign-card"
        >
          <strong className="site-header__campaign-title">
            Pérola Sampaio — Pré-candidata a Deputada Federal
          </strong>
          <p>
            Campanha participativa com foco em saúde pública, direitos das
            mulheres, inclusão social e participação popular.
          </p>
          <Boxed direction="row" gap="sm" wrap padding="none">
            <Link to="/seja-apoiador">Quero apoiar</Link>
            <Link to="/trajetoria">Conheça a trajetória</Link>
          </Boxed>
        </Boxed>

        <Boxed direction="row" gap="xs" wrap padding="none" align="center" justify="center">
          <span className="site-header__pill">Saúde Pública</span>
          <span className="site-header__pill">Direitos das Mulheres</span>
          <span className="site-header__pill">Inclusão Social</span>
          <span className="site-header__pill">Participação Popular</span>
          <span className="site-header__pill">Direitos Humanos</span>
        </Boxed>
      </Boxed>
    </header>
  );
}
