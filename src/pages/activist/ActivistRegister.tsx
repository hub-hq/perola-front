import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ActivistCodeInput,
  Boxed,
  Button,
  CheckBoxInput,
  CpfInput,
  EmailInput,
  FieldError,
  LabelInput,
  PasswordInput,
  PhoneInput,
  SelectInput,
  Spacing,
  ToastAlert,
  Title,
} from "@/components";
import { registerActivist } from "@/services/auth";
import { isValidActivistCode, isValidBrazilianPhone, isValidCpf, isValidEmail, isValidName } from "@/utils/validators";

type ActivistField = "name" | "cpf" | "email" | "phone" | "activistCode" | "confirmPassword";

const fieldErrorStyle = {
  border: "1px solid var(--color-feedback-error)",
} as const;

function ActivistRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ActivistField, string>>>({});

  function clearFieldError(field: ActivistField) {
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
    const cpf = String(formData.get("cpf") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const region = String(formData.get("region") ?? "").trim();
    const areaOfAction = String(formData.get("areaOfAction") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    const leadershipLevel = String(formData.get("leadershipLevel") ?? "").trim();
    const locality = String(formData.get("locality") ?? "").trim();
    const instagram = String(formData.get("instagram") ?? "").trim();
    const linkedin = String(formData.get("linkedin") ?? "").trim();
    const activistCode = String(formData.get("activistCode") ?? "").trim();

    const nextFieldErrors: Partial<Record<ActivistField, string>> = {};

    if (!isValidName(name)) {
      nextFieldErrors.name = "Nome invalido. Informe nome e sobrenome.";
    }

    if (!isValidCpf(cpf)) {
      nextFieldErrors.cpf = "CPF invalido. Verifique os digitos e tente novamente.";
    }

    if (!isValidEmail(email)) {
      nextFieldErrors.email = "E-mail invalido. Use um formato como nome@dominio.com.";
    }

    if (!isValidBrazilianPhone(phone)) {
      nextFieldErrors.phone = "Celular invalido. Use DDD + numero (10 ou 11 digitos).";
    }

    if (activistCode && !isValidActivistCode(activistCode)) {
      nextFieldErrors.activistCode = "Codigo de indicacao invalido. Exemplo: ATIV-2041.";
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
      await registerActivist({
        name,
        cpf,
        email,
        phone,
        city,
        region,
        areaOfAction,
        role,
        password,
        leadershipLevel: leadershipLevel || undefined,
        locality: locality || undefined,
        instagram: instagram || undefined,
        linkedin: linkedin || undefined,
        activistCode: activistCode || undefined,
      });
      navigate("/ativista/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Nao foi possivel criar a conta.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="auth-form-page">
      <ToastAlert message={errorMessage} title="Nao foi possivel continuar" onClose={() => setErrorMessage("")} />

      <Boxed
        maxWidth="sm"
        gap="md"
        style={{
          border: "1px solid var(--color-border-subtle)",
          borderRadius: "24px",
          background: "var(--color-surface-base)",
        }}
      >
        <Title level={1}>Cadastro de Ativista</Title>
        <p>Perfil de lideranca para mobilizacao territorial.</p>

        <Spacing size="sm" />

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="activist-register-name">Nome completo</label>
          <Spacing size="xs" />
          <LabelInput
            id="activist-register-name"
            name="name"
            placeholder="Seu nome"
            autoComplete="name"
            style={fieldErrors.name ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.name ? "true" : undefined}
            onChange={() => clearFieldError("name")}
            required
          />
          <FieldError message={fieldErrors.name} />

          <Spacing size="md" />

          <label htmlFor="activist-register-cpf">CPF</label>
          <Spacing size="xs" />
          <CpfInput
            id="activist-register-cpf"
            name="cpf"
            style={fieldErrors.cpf ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.cpf ? "true" : undefined}
            onChange={() => clearFieldError("cpf")}
            required
          />
          <FieldError message={fieldErrors.cpf} />

          <Spacing size="md" />

          <label htmlFor="activist-register-email">E-mail</label>
          <Spacing size="xs" />
          <EmailInput
            id="activist-register-email"
            name="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            style={fieldErrors.email ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.email ? "true" : undefined}
            onChange={() => clearFieldError("email")}
            required
          />
          <FieldError message={fieldErrors.email} />

          <Spacing size="md" />

          <label htmlFor="activist-register-phone">Celular</label>
          <Spacing size="xs" />
          <PhoneInput
            id="activist-register-phone"
            name="phone"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            style={fieldErrors.phone ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.phone ? "true" : undefined}
            onChange={() => clearFieldError("phone")}
            required
          />
          <FieldError message={fieldErrors.phone} />

          <Spacing size="md" />

          <label htmlFor="activist-register-city">Cidade</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-city" name="city" placeholder="Ex.: Porto Alegre" required />

          <Spacing size="md" />

          <label htmlFor="activist-register-region">Regiao/Bairro de atuacao</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-region" name="region" placeholder="Ex.: Zona Norte" required />

          <Spacing size="md" />

          <label htmlFor="activist-register-area">Area de atuacao</label>
          <Spacing size="xs" />
          <LabelInput
            id="activist-register-area"
            name="areaOfAction"
            placeholder="Ex.: SUS, movimento negro, educacao, juventude"
            required
          />

          <Spacing size="md" />

          <label htmlFor="activist-register-role">Cargo/funcao</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-role" name="role" placeholder="Ex.: lideranca comunitaria" required />

          <Spacing size="md" />

          <label htmlFor="activist-register-password">Senha</label>
          <Spacing size="xs" />
          <PasswordInput id="activist-register-password" name="password" autoComplete="new-password" placeholder="Crie uma senha" required />

          <Spacing size="md" />

          <label htmlFor="activist-register-confirm-password">Confirmar senha</label>
          <Spacing size="xs" />
          <PasswordInput
            id="activist-register-confirm-password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Repita sua senha"
            style={fieldErrors.confirmPassword ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.confirmPassword ? "true" : undefined}
            onChange={() => clearFieldError("confirmPassword")}
            required
          />
          <FieldError message={fieldErrors.confirmPassword} />

          <Spacing size="lg" />

          <Title level={3}>Campos opcionais</Title>

          <Spacing size="sm" />

          <label htmlFor="activist-register-leadership-level">Nivel de lideranca</label>
          <Spacing size="xs" />
          <SelectInput id="activist-register-leadership-level" name="leadershipLevel" defaultValue="">
            <option value="">Selecione (opcional)</option>
            <option value="bairro">Bairro</option>
            <option value="regional">Regional</option>
            <option value="municipal">Municipal</option>
            <option value="estadual">Estadual</option>
          </SelectInput>

          <Spacing size="md" />

          <label htmlFor="activist-register-locality">Localidade principal (rua/comunidade)</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-locality" name="locality" placeholder="Ex.: Restinga, Rubem Berta" />

          <Spacing size="md" />

          <label htmlFor="activist-register-instagram">Instagram</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-instagram" name="instagram" placeholder="@usuario" />

          <Spacing size="md" />

          <label htmlFor="activist-register-linkedin">LinkedIn</label>
          <Spacing size="xs" />
          <LabelInput id="activist-register-linkedin" name="linkedin" placeholder="linkedin.com/in/..." />

          <Spacing size="md" />

          <label htmlFor="activist-register-code">Codigo de ativista que indicou</label>
          <Spacing size="xs" />
          <ActivistCodeInput
            id="activist-register-code"
            name="activistCode"
            style={fieldErrors.activistCode ? fieldErrorStyle : undefined}
            aria-invalid={fieldErrors.activistCode ? "true" : undefined}
            onChange={() => clearFieldError("activistCode")}
          />
          <FieldError message={fieldErrors.activistCode} />

          <Spacing size="md" />

          <Boxed direction="row" align="center" gap="xs" padding="none">
            <CheckBoxInput id="activist-register-terms" name="terms" required />
            <label htmlFor="activist-register-terms">Li e aceito os termos de uso e politica de privacidade.</label>
          </Boxed>

          <Spacing size="lg" />

          <Button type="submit" disabled={isLoading} fullWidth>
            {isLoading ? "Criando conta..." : "Criar conta de ativista"}
          </Button>
        </form>

        <Spacing size="md" />

        <p>
          Ja possui conta? <Link to="/ativista/login">Entrar</Link>.
        </p>
      </Boxed>
    </main>
  );
}

export default ActivistRegister;
