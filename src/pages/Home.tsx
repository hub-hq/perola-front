import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="bg-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Pérola no Senado
            </h1>

            <p className="text-lg text-muted-foreground">
              Um projeto político independente, transparente e conectado com a sociedade.
            </p>

            <div className="flex gap-4">
              <Button size="lg" variant="primary">
                Conhecer propostas
              </Button>

              <Button size="lg" variant="outline">
                Seja um ativista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSTAS */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Propostas centrais
          </h2>

          <p className="text-muted-foreground max-w-3xl">
            Transparência no uso do dinheiro público, inovação no setor público,
            políticas baseadas em dados e compromisso com o desenvolvimento sustentável.
          </p>
        </div>
      </section>

      {/* SEJA ATIVISTA */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="border rounded-xl p-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Quer fazer parte dessa mudança?
              </h3>

              <p className="text-muted-foreground mt-2">
                Cadastre-se como ativista e participe ativamente da construção do projeto.
              </p>
            </div>

            <Button size="lg" variant="secondary">
              Quero ser ativista
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
