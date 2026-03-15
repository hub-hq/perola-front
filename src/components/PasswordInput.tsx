import type { InputHTMLAttributes } from "react";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function PasswordInput(props: PasswordInputProps) {
  return <input type="password" {...props} />;
}

export default PasswordInput;
