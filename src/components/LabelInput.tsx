import type { InputHTMLAttributes } from "react";

type LabelInputProps = InputHTMLAttributes<HTMLInputElement>;

function LabelInput(props: LabelInputProps) {
	return <input {...props} />;
}

export default LabelInput;
