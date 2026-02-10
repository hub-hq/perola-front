export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <span className="font-bold">Nome da Vereadora</span>
        <button className="md:hidden">☰</button>
      </div>
    </header>
  );
}
