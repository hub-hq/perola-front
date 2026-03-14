import type { InputHTMLAttributes } from "react";

type DateTimeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function DateTimeInput(props: DateTimeInputProps) {
  return <input type="datetime-local" {...props} />;
}

export default DateTimeInput;
