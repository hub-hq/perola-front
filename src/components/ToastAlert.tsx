import { useEffect } from "react";
import "@/styles/components/ToastAlert.scss";

type ToastAlertProps = {
  message?: string;
  title?: string;
  variant?: "error";
  autoHideMs?: number;
  onClose?: () => void;
};

function ToastAlert({
  message,
  title = "Atencao",
  variant = "error",
  autoHideMs = 4500,
  onClose,
}: ToastAlertProps) {
  useEffect(() => {
    if (!message || !onClose || autoHideMs <= 0) return undefined;

    const timeoutId = window.setTimeout(() => {
      onClose();
    }, autoHideMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [message, onClose, autoHideMs]);

  if (!message) return null;

  return (
    <div className={`toast-alert toast-alert--${variant}`} role="alert" aria-live="assertive">
      <div className="toast-alert__content">
        <p className="toast-alert__title">{title}</p>
        <p className="toast-alert__message">{message}</p>
      </div>
      <button className="toast-alert__close" type="button" onClick={onClose} aria-label="Fechar aviso">
        x
      </button>
    </div>
  );
}

export default ToastAlert;
