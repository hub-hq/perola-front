const TOKEN_KEY = "token";
const USERS_KEY = "activist_users";

type StoredUser = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

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

function getStoredUsers(): StoredUser[] {
  const data = localStorage.getItem(USERS_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data) as StoredUser[];
  } catch {
    return [];
  }
}

function setStoredUsers(users: StoredUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setSessionToken(email: string): void {
  const token = `activist-${email}-${Date.now()}`;
  localStorage.setItem(TOKEN_KEY, token);
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export async function login({ email, password }: LoginPayload): Promise<void> {
  const users = getStoredUsers();
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (!user || user.password !== password) {
    throw new Error("E-mail ou senha inválidos.");
  }

  setSessionToken(user.email);
}

export async function register({
  name,
  email,
  phone,
  password,
}: RegisterPayload): Promise<void> {
  const users = getStoredUsers();
  const alreadyExists = users.some(
    (item) => item.email.toLowerCase() === email.toLowerCase(),
  );

  if (alreadyExists) {
    throw new Error("Já existe uma conta com este e-mail.");
  }

  const nextUsers: StoredUser[] = [
    ...users,
    {
      name,
      email,
      phone,
      password,
    },
  ];

  setStoredUsers(nextUsers);
  setSessionToken(email);
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}
