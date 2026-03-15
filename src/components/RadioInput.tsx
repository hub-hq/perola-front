import type { InputHTMLAttributes } from "react";

type RadioInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function RadioInput(props: RadioInputProps) {
  return <input type="radio" {...props} />;
}

export default RadioInput;
