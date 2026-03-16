import { Link } from "react-router-dom";
import Boxed from "./Boxed";
import Spacing from "./Spacing";

type CTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type CTAProps = {
  title?: string;
  description?: string;
  actions?: CTAAction[];
};

const actionStyles = {
  primary: {
    background: "var(--color-brand-500)",
    color: "var(--color-text-on-brand)",
    border: "1px solid var(--color-brand-500)",
  },
  secondary: {
    background: "var(--color-bg-surface)",
    color: "var(--color-text-strong)",
    border: "1px solid var(--color-border-soft)",
  },
} as const;

function CTAActionLink({ label, href, variant = "primary", external = false }: CTAAction) {
  const sharedStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "44px",
    padding: "0 18px",
    borderRadius: "9999px",
    fontWeight: 700,
    textDecoration: "none",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    ...actionStyles[variant],
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={sharedStyle}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} style={sharedStyle}>
      {label}
    </Link>
  );
}

export function CTA({
  title = "Quer fazer parte dessa construção?",
  description = "Apoie, acompanhe as pautas e participe de uma campanha feita com diálogo, participação popular e justiça social.",
  actions = [
    { label: "Quero apoiar", href: "/seja-ativista", variant: "primary" },
    { label: "Conheça a trajetória", href: "/sobre", variant: "secondary" },
  ],
}: CTAProps) {
  return (
    <Boxed
      gap="sm"
      style={{
        borderRadius: "24px",
        border: "1px solid var(--color-border-subtle)",
        background: "linear-gradient(135deg, var(--color-bg-brand-gradient-start), var(--color-bg-brand-gradient-end))",
      }}
    >
      <strong style={{ fontSize: "1.35rem", lineHeight: 1.2 }}>{title}</strong>

      <p style={{ margin: 0, color: "var(--color-text-muted)" }}>{description}</p>

      <Spacing size="xs" />

      <Boxed direction="row" gap="sm" wrap padding="none" align="center">
        {actions.map((action) => (
          <CTAActionLink
            key={`${action.label}-${action.href}`}
            label={action.label}
            href={action.href}
            variant={action.variant}
            external={action.external}
          />
        ))}
      </Boxed>
    </Boxed>
  );
}
