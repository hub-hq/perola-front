import "@/styles/components/FieldError.scss";

type FieldErrorProps = {
  message?: string;
};

function FieldError({ message }: FieldErrorProps) {
  const hasMessage = Boolean(message?.trim());

  return (
    <div className={`field-error-slot${hasMessage ? " field-error-slot--visible" : ""}`}>
      <small className="field-error">{message ?? ""}</small>
    </div>
  );
}

export default FieldError;
