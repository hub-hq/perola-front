import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/services/auth";
import type { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export function ProtectedRoute({ children }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/ativista/login" replace />;
  }

  return children;
}
