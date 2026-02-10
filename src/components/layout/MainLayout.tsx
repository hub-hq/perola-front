import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      {/* Header */}
      <header>Header público</header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>Footer</footer>
    </>
  );
}
