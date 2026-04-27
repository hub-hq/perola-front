import type { ReactNode } from "react";
import { Boxed, Button, Spacing, Title } from "@/components";
import "@/styles/layouts/AdminDashboard.scss";

export type AdminNavItem = {
  key: string;
  label: string;
};

type AdminShellProps = {
  title: string;
  bannerText: string;
  navItems: AdminNavItem[];
  activeKey: string;
  onChangeModule: (key: string) => void;
  onLogout: () => void;
  userName?: string;
  children: ReactNode;
};

function getInitials(name?: string): string {
  if (!name) return "AD";
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "AD";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? "A"}${words[words.length - 1][0] ?? "D"}`.toUpperCase();
}

function getDisplayName(name?: string): string {
  if (!name) return "Administrador";
  const trimmed = name.trim();
  if (!trimmed) return "Administrador";
  return trimmed.split(/\s+/)[0] ?? "Administrador";
}

export function AdminShell({
  title,
  bannerText,
  navItems,
  activeKey,
  onChangeModule,
  onLogout,
  userName,
  children,
}: AdminShellProps) {
  const initials = getInitials(userName);
  const displayName = getDisplayName(userName);

  return (
    <main>
      <Boxed maxWidth="xl" padding="none">
        <section className="admin-shell">
          <aside className="admin-shell__sidebar">
            <Boxed gap="md">
              <div>
                <p className="admin-shell__brand">Painel Admin</p>
                <p className="admin-shell__subtitle">Gestao politica e mobilizacao</p>
              </div>

              <nav aria-label="Modulos do admin" className="admin-shell__menu">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`admin-shell__menu-button${item.key === activeKey ? " admin-shell__menu-button--active" : ""}`}
                    onClick={() => onChangeModule(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </Boxed>
          </aside>

          <div className="admin-shell__content">
            <header className="admin-shell__topbar">
              <Boxed padding="md" gap="sm">
                <Boxed direction="row" justify="between" align="center" wrap padding="none" gap="sm">
                  <div>
                    <Title level={2}>{title}</Title>
                    <p className="admin-shell__banner">{bannerText}</p>
                  </div>

                  <Boxed direction="row" align="center" gap="xs" wrap padding="none">
                    <div className="admin-shell__user-chip" aria-label={`Usuario logado: ${displayName}`}>
                      <span>{displayName}</span>
                      <span className="admin-shell__user-initials">{initials}</span>
                    </div>
                    <Button type="button" variant="outline" onClick={onLogout}>
                      Sair
                    </Button>
                  </Boxed>
                </Boxed>
              </Boxed>
            </header>

            <Boxed padding="md" gap="md">
              {children}
              <Spacing size="xxs" />
            </Boxed>
          </div>
        </section>
      </Boxed>
    </main>
  );
}
