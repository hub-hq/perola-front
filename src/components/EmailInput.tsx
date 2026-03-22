import type { InputHTMLAttributes } from "react";

type EmailInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function EmailInput(props: EmailInputProps) {
  return <input type="email" {...props} />;
}

export default EmailInput;
