import type { HTMLAttributes, ReactNode } from "react";

type TitleLevel = 1 | 2 | 3 | 4 | 5;

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: TitleLevel;
  children: ReactNode;
};

function Title({ level = 1, children, ...props }: TitleProps) {
  if (level === 1) return <h1 {...props}>{children}</h1>;
  if (level === 2) return <h2 {...props}>{children}</h2>;
  if (level === 3) return <h3 {...props}>{children}</h3>;
  if (level === 4) return <h4 {...props}>{children}</h4>;
  return <h5 {...props}>{children}</h5>;
}

export default Title;
