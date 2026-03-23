import type { InputHTMLAttributes } from "react";
import "@/styles/components/FormControls.scss";

type EmailInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function EmailInput(props: EmailInputProps) {
  return <input type="email" {...props} />;
}

export default EmailInput;
