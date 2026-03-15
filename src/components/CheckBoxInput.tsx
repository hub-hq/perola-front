import type { InputHTMLAttributes } from "react";

type CheckBoxInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function CheckBoxInput(props: CheckBoxInputProps) {
  return <input type="checkbox" {...props} />;
}

export default CheckBoxInput;
