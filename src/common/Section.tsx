import type { JSX } from "react";

type SectionProps = {
  title?: string;
  children?: JSX.Element;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
