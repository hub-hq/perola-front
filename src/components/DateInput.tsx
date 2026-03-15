import type { InputHTMLAttributes } from "react";

type DateInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function DateInput(props: DateInputProps) {
  return <input type="datetime-local" {...props} />;
}

export default DateInput;
