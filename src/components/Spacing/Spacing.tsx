import type { HTMLAttributes } from "react";

type SpacingSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type SpacingProps = HTMLAttributes<HTMLDivElement> & {
  size?: SpacingSize | number;
  direction?: "vertical" | "horizontal";
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

function Spacing({
  size = "md",
  direction = "vertical",
  style,
  ...props
}: SpacingProps) {
  const spacingValue = typeof size === "number" ? size : spacingSizes[size];

  return (
    <div
      aria-hidden="true"
      style={{
        flexShrink: 0,
        ...(direction === "vertical"
          ? { height: `${spacingValue}px` }
          : { width: `${spacingValue}px`, display: "inline-block" }),
        ...style,
      }}
      {...props}
    />
  );
}

export default Spacing;
