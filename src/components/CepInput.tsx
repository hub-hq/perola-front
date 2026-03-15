import type { ChangeEvent, InputHTMLAttributes } from "react";

type CepInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function formatCep(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function CepInput({ onChange, maxLength = 9, placeholder = "00000-000", ...props }: CepInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCep(e.target.value);
    onChange?.(e);
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={handleChange}
      {...props}
    />
  );
}

export default CepInput;
