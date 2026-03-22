import type { ChangeEvent, InputHTMLAttributes, InvalidEvent } from "react";

type EmailInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function EmailInput({ onInvalid, onChange, ...props }: EmailInputProps) {
  function handleInvalid(e: InvalidEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    if (input.validity.valueMissing) {
      input.setCustomValidity("Informe o e-mail.");
    } else {
      input.setCustomValidity("E-mail invalido. Use um formato como nome@dominio.com.");
    }
    onInvalid?.(e);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("");
    onChange?.(e);
  }

  return <input type="email" onInvalid={handleInvalid} onChange={handleChange} {...props} />;
}

export default EmailInput;
