import { Outlet } from "react-router-dom";
import "@/styles/layouts/AuthLayout.scss";

export function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
}
