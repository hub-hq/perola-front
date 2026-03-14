import type { ImgHTMLAttributes } from "react";

type IconProps = ImgHTMLAttributes<HTMLImageElement>;

function Icon({ width = 24, height = 24, alt = "", ...props }: IconProps) {
  return <img width={width} height={height} alt={alt} {...props} />;
}

export default Icon;
