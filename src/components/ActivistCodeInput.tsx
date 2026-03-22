import type { ChangeEvent, InputHTMLAttributes, InvalidEvent } from "react";
import { isValidActivistCode } from "@/utils/validators";

type ActivistCodeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function normalizeCode(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 20);
}

function ActivistCodeInput({ onChange, onInvalid, placeholder = "Ex.: ATIV-2041", ...props }: ActivistCodeInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = normalizeCode(e.target.value);

    if (!e.target.value || isValidActivistCode(e.target.value)) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Codigo invalido. Exemplo: ATIV-2041.");
    }

    onChange?.(e);
  }

  function handleInvalid(e: InvalidEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (!value) {
      e.currentTarget.setCustomValidity("");
      return;
    }
    e.currentTarget.setCustomValidity("Codigo invalido. Exemplo: ATIV-2041.");
    onInvalid?.(e);
  }

  return (
    <input
      type="text"
      autoCapitalize="characters"
      onChange={handleChange}
      onInvalid={handleInvalid}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default ActivistCodeInput;
