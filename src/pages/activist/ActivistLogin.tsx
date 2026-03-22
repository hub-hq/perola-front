import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Boxed, Button, EmailInput, PasswordInput, Spacing, Title } from "@/components";
import { canUseMockSession, login, startMockActivistSession } from "@/services/auth";

function ActivistLogin() {
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
      navigate("/ativista/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível fazer login.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleMockLogin() {
    const started = startMockActivistSession();
    if (started) navigate("/ativista/dashboard");
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
        <Title level={1}>Entrar como Ativista</Title>
        <p>Acesse sua conta de ativista para continuar.</p>

        <Spacing size="sm" />

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="activist-login-email">E-mail</label>
          <Spacing size="xs" />
          <EmailInput
            id="activist-login-email"
            name="email"
            autoComplete="email"
            placeholder="seuemail@exemplo.com"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-login-password">Senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="activist-login-password"
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

        {canUseMockSession() ? (
          <>
            <Button type="button" variant="secondary" fullWidth onClick={handleMockLogin}>
              Entrar com usuário fake (dev)
            </Button>
            <Spacing size="xs" />
            <small style={{ color: "var(--color-text-tertiary)" }}>
              Cria uma sessão mock para simular login de ativista.
            </small>
          </>
        ) : null}

        <Spacing size="md" />

        <p>
          Ainda não tem conta? <Link to="/ativista/cadastro">Cadastre-se</Link>.
        </p>
      </Boxed>
    </main>
  );
}

export default ActivistLogin;
