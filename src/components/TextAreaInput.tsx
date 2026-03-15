import type { TextareaHTMLAttributes } from "react";

type TextAreaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInput(props: TextAreaInputProps) {
  return <textarea {...props} />;
}

export default TextAreaInput;
