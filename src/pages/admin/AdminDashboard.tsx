import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticatedUser, logout } from "@/services/auth";
import { AdminShell, type AdminNavItem } from "@/pages/admin/components/AdminShell";
import { AdminActivistsModule } from "@/pages/admin/modules/AdminActivistsModule";
import { AdminHomeModule } from "@/pages/admin/modules/AdminHomeModule";
import { AdminOldModule } from "@/pages/admin/modules/AdminOldModule";
import { AdminReportsModule } from "@/pages/admin/modules/AdminReportsModule";
import { AdminSettingsModule } from "@/pages/admin/modules/AdminSettingsModule";
import { AdminSupportersModule } from "@/pages/admin/modules/AdminSupportersModule";

type AdminModuleKey = "home" | "reports" | "supporters" | "activists" | "settings" | "old";

const adminNavItems: AdminNavItem[] = [
  { key: "home", label: "Home" },
  { key: "reports", label: "Relatorios" },
  { key: "supporters", label: "Apoiadores" },
  { key: "activists", label: "Ativistas" },
  { key: "settings", label: "Configuracoes" },
  { key: "old", label: "Old" },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const authenticatedUser = getAuthenticatedUser();
  const isMockSession = authenticatedUser?.isMock === true;
  const [activeModule, setActiveModule] = useState<AdminModuleKey>("home");

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const activeModuleNode = useMemo(() => {
    switch (activeModule) {
      case "home":
        return <AdminHomeModule />;
      case "reports":
        return <AdminReportsModule />;
      case "supporters":
        return <AdminSupportersModule />;
      case "activists":
        return <AdminActivistsModule />;
      case "settings":
        return <AdminSettingsModule />;
      case "old":
        return <AdminOldModule isMockSession={isMockSession} />;
      default:
        return <AdminHomeModule />;
    }
  }, [activeModule, isMockSession]);

  return (
    <AdminShell
      title="Dashboard Administrativo"
      bannerText="Visao unificada da campanha com modulos por area para escalar operacoes e analises."
      navItems={adminNavItems}
      activeKey={activeModule}
      onChangeModule={(key) => setActiveModule(key as AdminModuleKey)}
      onLogout={handleLogout}
      userName={authenticatedUser?.name}
    >
      {activeModuleNode}
    </AdminShell>
  );
}

export default AdminDashboard;
