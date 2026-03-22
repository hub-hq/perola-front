import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { AuthLayout } from "@/layout/AuthLayout";

import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Login from "@/pages/Login";
import Causas from "@/pages/Causas";
import Trajetoria from "@/pages/Trajetoria";
import SejaAtivista from "@/pages/SejaAtivista";
import SejaApoiador from "@/pages/SejaApoiador";
import PrivacyPolicy from "@/pages/PoliticaPrivacidade";

// Páginas do ativista
import ActivistLogin from "@/pages/activist/ActivistLogin";
import ActivistRegister from "@/pages/activist/ActivistRegister";
import ActivistMemberDashboard from "@/pages/activist/ActivistMemberDashboard";

// Páginas do apoiador
import SupporterLogin from "@/pages/supporter/SupporterLogin";
import SupporterRegister from "@/pages/supporter/SupporterRegister";
import SupporterDashboard from "@/pages/supporter/SupporterDashboard";

// Páginas do admin
import AdminDashboard from "@/pages/admin/AdminDashboard";

import { ProtectedRoute } from "./protected-route";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/trajetoria", element: <Trajetoria /> },
      { path: "/causas", element: <Causas /> },
      { path: "/politica-privacidade", element: <PrivacyPolicy /> },
      { path: "/seja-ativista", element: <SejaAtivista /> },
      { path: "/seja-apoiador", element: <SejaApoiador /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/admin/login", element: <Navigate to="/login" replace /> },
      { path: "/ativista/login", element: <ActivistLogin /> },
      { path: "/ativista/cadastro", element: <ActivistRegister /> },
      { path: "/apoiador/login", element: <SupporterLogin /> },
      { path: "/apoiador/cadastro", element: <SupporterRegister /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ativista/dashboard",
        element: (
          <ProtectedRoute>
            <ActivistMemberDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/apoiador/dashboard",
        element: (
          <ProtectedRoute>
            <SupporterDashboard />
          </ProtectedRoute>
        ),
      },
      { path: "/admin/home", element: <Navigate to="/admin/dashboard" replace /> },
      { path: "/ativista/home", element: <Navigate to="/ativista/dashboard" replace /> },
      { path: "/apoiador/home", element: <Navigate to="/apoiador/dashboard" replace /> },
    ],
  },
]);


// import {
//   type RouteConfig,
//   route,
//   index,
//   layout,
//   prefix,
// } from "@react-router/dev/routes";

// export default [
//   index("./pages/Home.tsx"),
//   route("login", "./Login.tsx"),
//   route("sobre", "./Sobre.tsx"),
//   route("causas", "./Causas.tsx"),
//   route("seja-ativista", "./SejaAtivista.tsx"),
//   route("politica-privacidade", "./PoliticaPrivacidade.tsx"),

//   layout("./auth/layout.tsx", [
//     route("login", "./auth/login.tsx"),
//     route("register", "./auth/register.tsx"),
//   ]),

//   ...prefix("concerts", [
//     index("./concerts/home.tsx"),
//     route(":city", "./concerts/city.tsx"),
//     route("trending", "./concerts/trending.tsx"),
//   ]),
// ] satisfies RouteConfig;


// 1️⃣ Adaptar a estrutura exatamente às páginas do “Pimenta no Senado”
// Vou partir de uma estrutura enxuta, realista e eficiente (sem inflar coisa que ninguém usa).

// 🌐 Estrutura de páginas (mapa do site)
// Públicas (sem cadastro):

// / → Home
// /sobre → Quem é Pimenta
// /propostas → Propostas e bandeiras
// /atuacao → Atuação política / histórico
// /noticias → Notícias e atualizações
// /noticia/:slug → Página da notícia
// /agenda → Agenda pública
// /apoie → Apoie a campanha
// /contato → Contato
// /privacidade → Política de privacidade

// Semi-engajamento (sem login):
// /newsletter → Inscrição por e-mail
// /voluntario → Quero ajudar
// /doacao → Doação (se houver)

// Área restrita (login):
// /login
// /cadastro
// /area-apoiador
// /area-apoiador/eventos
// /area-apoiador/materiais

// ⚠️ Importante:
// A experiência principal NÃO depende de login. Login é bônus, não barreira.
