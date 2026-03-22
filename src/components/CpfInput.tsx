import type { ChangeEvent, InputHTMLAttributes, InvalidEvent } from "react";
import { isValidCpf } from "@/utils/validators";

type CpfInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function formatCpf(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function CpfInput({ onChange, onInvalid, maxLength = 14, placeholder = "000.000.000-00", ...props }: CpfInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCpf(e.target.value);

    if (!e.target.value || isValidCpf(e.target.value)) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("CPF invalido. Verifique os digitos.");
    }

    onChange?.(e);
  }

  function handleInvalid(e: InvalidEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (!value) {
      e.currentTarget.setCustomValidity("Informe o CPF.");
    } else {
      e.currentTarget.setCustomValidity("CPF invalido. Verifique os digitos.");
    }
    onInvalid?.(e);
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={handleChange}
      onInvalid={handleInvalid}
      {...props}
    />
  );
}

export default CpfInput;
