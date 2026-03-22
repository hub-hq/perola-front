import type { InputHTMLAttributes } from "react";
import "@/styles/components/form-controls.scss";

type LabelInputProps = InputHTMLAttributes<HTMLInputElement>;

function LabelInput(props: LabelInputProps) {
	return <input {...props} />;
}

export default LabelInput;
