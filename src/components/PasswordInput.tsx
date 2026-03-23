import type { InputHTMLAttributes } from "react";
import "@/styles/components/FormControls.scss";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function PasswordInput(props: PasswordInputProps) {
  return <input type="password" {...props} />;
}

export default PasswordInput;
