import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ActivistCodeInput,
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
import { registerSupporter } from "@/services/auth";
import { isValidActivistCode, isValidBrazilianPhone, isValidEmail } from "@/utils/validators";

type SupporterField = "email" | "phone" | "referredByActivistCode" | "confirmPassword";

const fieldErrorStyle = {
  border: "1px solid var(--color-feedback-error)",
} as const;

const fieldErrorTextStyle = {
  color: "var(--color-feedback-error)",
  fontSize: "0.85rem",
  fontWeight: 600,
} as const;

function SupporterRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<SupporterField, string>>>({});

  function clearFieldError(field: SupporterField) {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const region = String(formData.get("region") ?? "").trim();
    const areaOfAction = String(formData.get("areaOfAction") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    const party = String(formData.get("party") ?? "").trim();
    const referredByActivistCode = String(formData.get("referredByActivistCode") ?? "").trim();
    const isPtMember = formData.get("isPtMember") === "on";
    const isMilitant = formData.get("isMilitant") === "on";

    const nextFieldErrors: Partial<Record<SupporterField, string>> = {};

    if (!isValidEmail(email)) {
      nextFieldErrors.email = "E-mail invalido. Use um formato como nome@dominio.com.";
    }

    if (!isValidBrazilianPhone(phone)) {
      nextFieldErrors.phone = "Celular invalido. Use DDD + numero (10 ou 11 digitos).";
    }

    if (referredByActivistCode && !isValidActivistCode(referredByActivistCode)) {
      nextFieldErrors.referredByActivistCode = "Codigo de ativista invalido. Exemplo: ATIV-2041.";
    }

    if (password !== confirmPassword) {
      nextFieldErrors.confirmPassword = "As senhas nao conferem.";
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setErrorMessage("Revise os campos destacados em vermelho.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setFieldErrors({});

    try {
      await registerSupporter({
        name,
        email,
        phone,
        city,
        region,
        areaOfAction,
        role,
        password,
        party: party || undefined,
        referredByActivistCode: referredByActivistCode || undefined,
        isPtMember,
        isMilitant,
      });
      navigate("/");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Nao foi possivel criar a conta.");
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
        <Title level={1}>Cadastro de Apoiador</Title>
        <p>Dados basicos para contato e relacionamento com a campanha.</p>

        <Spacing size="sm" />

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="supporter-register-name">Nome completo</label>
          <Spacing size="xs" />
          <LabelInput id="supporter-register-name" name="name" placeholder="Seu nome" autoComplete="name" required />

          <Spacing size="md" />

          <label htmlFor="supporter-register-email">E-mail</label>
          <Spacing size="xs" />
          <EmailInput
            id="supporter-register-email"
            name="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            style={fieldErrors.email ? fieldErrorStyle : undefined}
            onChange={() => clearFieldError("email")}
            required
          />
          {fieldErrors.email ? <small style={fieldErrorTextStyle}>{fieldErrors.email}</small> : null}

          <Spacing size="md" />

          <label htmlFor="supporter-register-phone">Celular</label>
          <Spacing size="xs" />
          <PhoneInput
            id="supporter-register-phone"
            name="phone"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            style={fieldErrors.phone ? fieldErrorStyle : undefined}
            onChange={() => clearFieldError("phone")}
            required
          />
          {fieldErrors.phone ? <small style={fieldErrorTextStyle}>{fieldErrors.phone}</small> : null}

          <Spacing size="md" />

          <label htmlFor="supporter-register-region">Area/Bairro</label>
          <Spacing size="xs" />
          <LabelInput id="supporter-register-region" name="region" placeholder="Ex.: Zona Sul" required />

          <Spacing size="md" />

          <label htmlFor="supporter-register-city">Cidade</label>
          <Spacing size="xs" />
          <LabelInput id="supporter-register-city" name="city" placeholder="Ex.: Porto Alegre" required />

          <Spacing size="md" />

          <label htmlFor="supporter-register-area">Area de atuacao</label>
          <Spacing size="xs" />
          <LabelInput
            id="supporter-register-area"
            name="areaOfAction"
            placeholder="Ex.: SUS, movimento negro, cultura, educacao"
            required
          />

          <Spacing size="md" />

          <label htmlFor="supporter-register-role">Cargo/funcao</label>
          <Spacing size="xs" />
          <LabelInput id="supporter-register-role" name="role" placeholder="Ex.: professora, agente de saude" required />

          <Spacing size="md" />

          <label htmlFor="supporter-register-password">Senha</label>
          <Spacing size="xs" />
          <PasswordInput id="supporter-register-password" name="password" autoComplete="new-password" placeholder="Crie uma senha" required />

          <Spacing size="md" />

          <label htmlFor="supporter-register-confirm-password">Confirmar senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="supporter-register-confirm-password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Repita sua senha"
            style={fieldErrors.confirmPassword ? fieldErrorStyle : undefined}
            onChange={() => clearFieldError("confirmPassword")}
            required
          />
          {fieldErrors.confirmPassword ? (
            <small style={fieldErrorTextStyle}>{fieldErrors.confirmPassword}</small>
          ) : null}

          <Spacing size="lg" />

          <Title level={3}>Campos opcionais</Title>

          <Spacing size="sm" />

          <label htmlFor="supporter-register-party">Filiacao partidaria</label>
          <Spacing size="xs" />
          <LabelInput id="supporter-register-party" name="party" placeholder="Ex.: PT, PSOL, sem filiacao" />

          <Spacing size="md" />

          <label htmlFor="supporter-register-code">Codigo do ativista que indicou</label>
          <Spacing size="xs" />
          <ActivistCodeInput
            id="supporter-register-code"
            name="referredByActivistCode"
            style={fieldErrors.referredByActivistCode ? fieldErrorStyle : undefined}
            onChange={() => clearFieldError("referredByActivistCode")}
          />
          {fieldErrors.referredByActivistCode ? (
            <small style={fieldErrorTextStyle}>{fieldErrors.referredByActivistCode}</small>
          ) : null}

          <Spacing size="md" />

          <Boxed direction="row" align="center" gap="xs" padding="none">
            <CheckBoxInput id="supporter-register-pt-member" name="isPtMember" />
            <label htmlFor="supporter-register-pt-member">Ja sou filiado(a) ao PT</label>
          </Boxed>

          <Spacing size="xs" />

          <Boxed direction="row" align="center" gap="xs" padding="none">
            <CheckBoxInput id="supporter-register-militant" name="isMilitant" />
            <label htmlFor="supporter-register-militant">Ja atuo como militante</label>
          </Boxed>

          <Spacing size="md" />

          <Boxed direction="row" align="center" gap="xs" padding="none">
            <CheckBoxInput id="supporter-register-terms" name="terms" required />
            <label htmlFor="supporter-register-terms">Li e aceito os termos de uso e politica de privacidade.</label>
          </Boxed>

          <Spacing size="lg" />

          <Button type="submit" disabled={isLoading} fullWidth>
            {isLoading ? "Criando conta..." : "Criar conta de apoiador"}
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
          Ja possui conta? <Link to="/apoiador/login">Entrar</Link>.
        </p>
      </Boxed>
    </main>
  );
}

export default SupporterRegister;
