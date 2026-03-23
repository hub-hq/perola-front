import "@/styles/components/FieldError.scss";

type FieldErrorProps = {
  message?: string;
};

function FieldError({ message }: FieldErrorProps) {
  return (
    <div className="field-error-slot">
      <small className="field-error">{message ?? ""}</small>
    </div>
  );
}

export default FieldError;
