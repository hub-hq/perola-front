import type { ChangeEvent, InputHTMLAttributes } from "react";

type PhoneInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function PhoneInput({ onChange, maxLength = 15, placeholder = "(00) 00000-0000", ...props }: PhoneInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatPhone(e.target.value);
    onChange?.(e);
  }

  return (
    <input
      type="tel"
      inputMode="numeric"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={handleChange}
      {...props}
    />
  );
}

export default PhoneInput;
