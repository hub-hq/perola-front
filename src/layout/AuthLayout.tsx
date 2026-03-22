import { Outlet } from "react-router-dom";
import "@/styles/layouts/auth-layout.scss";

export function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
}
