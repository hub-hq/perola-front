import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, EmailInput, PasswordInput, Spacing, Title } from "@/components";
import { login } from "@/services/auth";

function SupporterLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    setIsLoading(true);
    setErrorMessage("");

    try {
      await login({ email, password });
      navigate("/apoiador/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Nao foi possivel fazer login.");
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
          background: "var(--color-surface-base)",
        }}
      >
        <Title level={1}>Entrar como Apoiador</Title>
        <p>Acesse sua conta de apoiador para atualizar seus dados.</p>

        <Spacing size="sm" />

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="supporter-login-email">E-mail</label>
          <Spacing size="xs" />
          <EmailInput
            id="supporter-login-email"
            name="email"
            autoComplete="email"
            placeholder="seuemail@exemplo.com"
            required
          />

          <Spacing size="md" />

          <label htmlFor="supporter-login-password">Senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="supporter-login-password"
            name="password"
            autoComplete="current-password"
            placeholder="Sua senha"
            required
          />

          <Spacing size="lg" />

          <Button type="submit" disabled={isLoading} fullWidth>
            {isLoading ? "Entrando..." : "Entrar"}
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
          Ainda nao tem conta? <Link to="/apoiador/cadastro">Cadastre-se</Link>.
        </p>
      </Boxed>
    </main>
  );
}

export default SupporterLogin;
