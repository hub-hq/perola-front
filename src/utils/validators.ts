export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidBrazilianPhone(value: string): boolean {
  const digits = onlyDigits(value);
  return digits.length === 10 || digits.length === 11;
}

export function isValidActivistCode(value: string): boolean {
  const trimmed = value.trim();
  // Example accepted: ATIV-2041, LIDER-POA-01, 1234
  return /^[A-Za-z0-9][A-Za-z0-9-]{3,19}$/.test(trimmed);
}

export function isValidCpf(value: string): boolean {
  const cpf = onlyDigits(value);

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const calcCheckDigit = (base: string, factor: number): number => {
    let total = 0;
    for (let i = 0; i < base.length; i += 1) {
      total += Number(base[i]) * (factor - i);
    }
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const digit1 = calcCheckDigit(cpf.slice(0, 9), 10);
  const digit2 = calcCheckDigit(cpf.slice(0, 10), 11);

  return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
}
