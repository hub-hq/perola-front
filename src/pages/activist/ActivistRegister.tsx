import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Boxed,
  Button,
  CheckBoxInput,
  EmailInput,
  LabelInput,
  PasswordInput,
  PhoneInput,
  Spacing,
  Title,
} from "@/components";
import { register } from "@/services/auth";

function ActivistRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não conferem.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      await register({ name, email, phone, password });
      navigate("/ativista/dashboard");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível criar a conta.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <Boxed
        maxWidth="sm"
        gap="md"
        style={{
          border: "1px solid var(--color-border-subtle)",
          borderRadius: "24px",
          background: "var(--color-bg-surface)",
        }}
      >
        <Title level={1}>Cadastro de Ativista</Title>
        <p>Preencha os dados para criar sua conta.</p>

        <Spacing size="sm" />

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="activist-register-name">Nome completo</label>
          <Spacing size="xs" />
          <LabelInput
            id="activist-register-name"
            name="name"
            placeholder="Seu nome"
            autoComplete="name"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-register-email">E-mail</label>
          <Spacing size="xs" />
          <EmailInput
            id="activist-register-email"
            name="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-register-phone">Telefone</label>
          <Spacing size="xs" />
          <PhoneInput
            id="activist-register-phone"
            name="phone"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-register-password">Senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="activist-register-password"
            name="password"
            autoComplete="new-password"
            placeholder="Crie uma senha"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-register-confirm-password">Confirmar senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="activist-register-confirm-password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Repita sua senha"
            required
          />

          <Spacing size="md" />

          <Boxed direction="row" align="center" gap="xs" padding="none">
            <CheckBoxInput id="activist-register-terms" name="terms" required />
            <label htmlFor="activist-register-terms">
              Li e aceito os termos de uso e política de privacidade.
            </label>
          </Boxed>

          <Spacing size="lg" />

          <Button type="submit" disabled={isLoading} fullWidth>
            {isLoading ? "Criando conta..." : "Criar conta"}
          </Button>

          {errorMessage ? (
            <>
              <Spacing size="sm" />
              <p style={{ color: "var(--color-feedback-error)", fontWeight: 600 }}>{errorMessage}</p>
            </>
          ) : null}
        </form>

        <Spacing size="md" />

        <p>
          Já possui conta? <Link to="/ativista/login">Entrar</Link>.
        </p>
      </Boxed>
    </main>
  );
}

export default ActivistRegister;
