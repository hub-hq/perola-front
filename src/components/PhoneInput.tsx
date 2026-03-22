import type { ChangeEvent, InputHTMLAttributes, InvalidEvent } from "react";

type PhoneInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function PhoneInput({ onChange, onInvalid, maxLength = 15, placeholder = "(00) 00000-0000", ...props }: PhoneInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatPhone(e.target.value);
    e.target.setCustomValidity("");
    onChange?.(e);
  }

  function handleInvalid(e: InvalidEvent<HTMLInputElement>) {
    if (e.currentTarget.validity.valueMissing) {
      e.currentTarget.setCustomValidity("Informe o celular.");
    } else {
      e.currentTarget.setCustomValidity("Celular invalido. Use DDD + numero (10 ou 11 digitos).");
    }
    onInvalid?.(e);
  }

  return (
    <input
      type="tel"
      inputMode="numeric"
      maxLength={maxLength}
      pattern="^\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}$"
      placeholder={placeholder}
      onChange={handleChange}
      onInvalid={handleInvalid}
      {...props}
    />
  );
}

export default PhoneInput;
