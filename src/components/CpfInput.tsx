import type { ChangeEvent, InputHTMLAttributes } from "react";

type CpfInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function formatCpf(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function CpfInput({ onChange, maxLength = 14, placeholder = "000.000.000-00", ...props }: CpfInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCpf(e.target.value);
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

export default CpfInput;
