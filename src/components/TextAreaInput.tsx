import type { TextareaHTMLAttributes } from "react";
import "@/styles/components/form-controls.scss";

type TextAreaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInput(props: TextAreaInputProps) {
  return <textarea {...props} />;
}

export default TextAreaInput;
