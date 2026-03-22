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
