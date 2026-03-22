export type AuthUser = {
  id: string;
  name: string;
  email: string;
  profile: "activist" | "supporter";
  activistCode?: string;
  isMock?: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
};
