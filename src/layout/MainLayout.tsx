import { Outlet } from "react-router-dom";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";

export function MainLayout() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Header */}
      <Header />

      {/* Content */}
      <main style={{ flex: 1, padding: "0 16px" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <div style={{ padding: "0 0 12px" }}>
        <Footer />
      </div>
    </div>
  );
}
