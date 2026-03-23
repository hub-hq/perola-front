import type { SelectHTMLAttributes } from "react";
import "@/styles/components/FormControls.scss";

type SelectOption = {
  label: string;
  value: string;
};

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: SelectOption[];
};

function SelectInput({ options = [], children, ...props }: SelectInputProps) {
  return (
    <select {...props}>
      {children ??
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
}

export default SelectInput;
