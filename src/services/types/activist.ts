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
};
