import type { ButtonHTMLAttributes, CSSProperties } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const baseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  borderRadius: "9999px",
  border: "1px solid transparent",
  fontFamily: "inherit",
  fontWeight: 700,
  lineHeight: 1.2,
  textDecoration: "none",
  cursor: "pointer",
  transition: "transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "#646cff",
    color: "#ffffff",
    borderColor: "#646cff",
  },
  secondary: {
    background: "#f3f4f6",
    color: "#111827",
    borderColor: "#e5e7eb",
  },
  outline: {
    background: "#ffffff",
    color: "#111827",
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
};

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    minHeight: "38px",
    padding: "0 14px",
    fontSize: "0.9rem",
  },
  md: {
    minHeight: "44px",
    padding: "0 18px",
    fontSize: "1rem",
  },
  lg: {
    minHeight: "50px",
    padding: "0 22px",
    fontSize: "1rem",
  },
};

function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = props.disabled;

  return (
    <button
      {...props}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...(fullWidth ? { width: "100%" } : {}),
        ...(isDisabled ? { opacity: 0.6, cursor: "not-allowed" } : {}),
        ...style,
      }}
    />
  );
}

export default Button;
