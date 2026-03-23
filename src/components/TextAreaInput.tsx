import type { TextareaHTMLAttributes } from "react";
import "@/styles/components/FormControls.scss";

type TextAreaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInput(props: TextAreaInputProps) {
  return <textarea {...props} />;
}

export default TextAreaInput;
