import axios from "axios";
import { api } from "@/services/api";

const TOKEN_KEY = "token";
const USER_KEY = "auth_user";
const MOCK_TOKEN = "mock-activist-token";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  profile: "activist" | "supporter";
  activistCode?: string;
  isMock?: boolean;
};

const mockActivistUser: AuthUser = {
  id: "mock-activist-1",
  name: "Ativista Demo",
  email: "demo.ativista@perola.dev",
  profile: "activist",
  activistCode: "ATIV-2041",
  isMock: true,
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterSupporterPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  region: string;
  areaOfAction: string;
  role: string;
  password: string;
  party?: string;
  referredByActivistCode?: string;
  isPtMember?: boolean;
  isMilitant?: boolean;
};

export type RegisterActivistPayload = {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  city: string;
  region: string;
  areaOfAction: string;
  role: string;
  password: string;
  leadershipLevel?: string;
  locality?: string;
  instagram?: string;
  linkedin?: string;
  activistCode?: string;
};

type AuthResponse = {
  token: string;
};

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

function setUser(user: AuthUser): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getAuthenticatedUser(): AuthUser | null {
  const value = localStorage.getItem(USER_KEY);
  if (!value) return null;

  try {
    return JSON.parse(value) as AuthUser;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function canUseMockSession(): boolean {
  return import.meta.env.DEV;
}

export function startMockActivistSession(): boolean {
  if (!canUseMockSession()) return false;
  setToken(MOCK_TOKEN);
  setUser(mockActivistUser);
  return true;
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

export async function registerSupporter(payload: RegisterSupporterPayload): Promise<void> {
  try {
    const { data } = await api.post<AuthResponse>("/auth/supporters/register", payload);
    setToken(data.token);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      throw new Error("Ja existe uma conta com este e-mail.");
    }
    throw new Error("Nao foi possivel criar a conta de apoiador. Tente novamente.");
  }
}

export async function registerActivist(payload: RegisterActivistPayload): Promise<void> {
  try {
    const { data } = await api.post<AuthResponse>("/auth/activists/register", payload);
    setToken(data.token);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      throw new Error("Ja existe uma conta com este e-mail.");
    }
    throw new Error("Nao foi possivel criar a conta de ativista. Tente novamente.");
  }
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
