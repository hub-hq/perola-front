import type { ImgHTMLAttributes } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

function Img(props: ImgProps) {
  return <img {...props} />;
}

export default Img;
