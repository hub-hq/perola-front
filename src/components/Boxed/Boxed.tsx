import type { CSSProperties, HTMLAttributes } from "react";

type SpacingSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type MaxWidthSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

type BoxedProps = HTMLAttributes<HTMLDivElement> & {
  /** Largura máxima do box. Padrão: "lg" */
  maxWidth?: MaxWidthSize;
  /** Centraliza o box horizontalmente via margin auto */
  centered?: boolean;
  /** Padding interno. Padrão: "md" */
  padding?: SpacingSize | number | "none";
  /** Direção dos filhos (flex). Padrão: "column" */
  direction?: "row" | "column";
  /** Espaçamento entre filhos */
  gap?: SpacingSize | number;
  /** Alinhamento dos filhos no eixo cruzado */
  align?: "start" | "center" | "end" | "stretch";
  /** Distribuição dos filhos no eixo principal */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Permite que os filhos quebrem linha quando em "row" */
  wrap?: boolean;
};

const spacingSizes: Record<SpacingSize, number> = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
};

const maxWidthSizes: Record<MaxWidthSize, string> = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
};

const justifyMap: Record<NonNullable<BoxedProps["justify"]>, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

function resolveSpacing(value: SpacingSize | number | "none" | undefined): string | undefined {
  if (value === undefined || value === "none") return undefined;
  if (typeof value === "number") return `${value}px`;
  return `${spacingSizes[value]}px`;
}

function Boxed({
  maxWidth = "lg",
  centered = true,
  padding = "md",
  direction = "column",
  gap,
  align,
  justify,
  wrap = false,
  style,
  ...props
}: BoxedProps) {
  const computedStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: maxWidthSizes[maxWidth],
    ...(centered ? { marginLeft: "auto", marginRight: "auto" } : {}),
    ...(padding !== "none" ? { padding: resolveSpacing(padding) } : {}),
    ...(gap !== undefined ? { gap: resolveSpacing(gap) } : {}),
    ...(align ? { alignItems: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align } : {}),
    ...(justify ? { justifyContent: justifyMap[justify] } : {}),
    ...(wrap ? { flexWrap: "wrap" } : {}),
    backgroundColor: "red",
    ...style,
  };

  return <div style={computedStyle} {...props} />;
}

export default Boxed;
