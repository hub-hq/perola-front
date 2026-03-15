import axios from "axios";
import { api } from "@/services/api";

const TOKEN_KEY = "token";

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export async function login(payload: LoginPayload): Promise<void> {
  try {
    const { data } = await api.post<AuthResponse>("/auth/login", payload);
    setToken(data.token);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error("E-mail ou senha inválidos.");
    }
    throw new Error("Não foi possível fazer login. Tente novamente.");
  }
}

export async function register(payload: RegisterPayload): Promise<void> {
  try {
    const { data } = await api.post<AuthResponse>("/auth/register", payload);
    setToken(data.token);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      throw new Error("Já existe uma conta com este e-mail.");
    }
    throw new Error("Não foi possível criar a conta. Tente novamente.");
  }
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}
