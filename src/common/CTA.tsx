export function CTA() {
  return (
    <div className="bg-primary text-white p-6 rounded-xl text-center">
      <h3 className="text-xl font-semibold mb-2">
        Quer acompanhar de perto?
      </h3>
      <p className="mb-4">Siga nas redes e fique por dentro</p>
      <div className="flex gap-3 justify-center">
        <button className="bg-white text-black px-4 py-2 rounded">
          Instagram
        </button>
        <button className="bg-white text-black px-4 py-2 rounded">
          WhatsApp
        </button>
      </div>
    </div>
  );
}
