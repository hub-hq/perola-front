import type { HTMLAttributes, ReactNode } from "react";
import { Boxed, Spacing, Title } from "@/components";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  children?: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  padded?: boolean;
};

export function Section({
  title,
  children,
  maxWidth = "xl",
  gap = "md",
  padded = false,
  style,
  ...props
}: SectionProps) {
  return (
    <section style={style} {...props}>
      <Boxed
        maxWidth={maxWidth}
        padding={padded ? "md" : "none"}
        gap={gap}
      >
        {title ? (
          <>
            <Title level={2}>{title}</Title>
            <Spacing size="xs" />
          </>
        ) : null}
        {children}
      </Boxed>
    </section>
  );
}
