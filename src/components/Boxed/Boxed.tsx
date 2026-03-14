import type { HTMLAttributes } from "react";

type BoxedProps = HTMLAttributes<HTMLDivElement>;

function Boxed(props: BoxedProps) {
  return <div {...props} />;
}

export default Boxed;
