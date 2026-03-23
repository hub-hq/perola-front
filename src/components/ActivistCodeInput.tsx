import type { ChangeEvent, InputHTMLAttributes } from "react";
import "@/styles/components/FormControls.scss";

type ActivistCodeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function normalizeCode(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 20);
}

function ActivistCodeInput({ onChange, placeholder = "Ex.: ATIV-2041", ...props }: ActivistCodeInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = normalizeCode(e.target.value);
    onChange?.(e);
  }

  return (
    <input
      type="text"
      autoCapitalize="characters"
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default ActivistCodeInput;
