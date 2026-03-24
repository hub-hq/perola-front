export type RegisterSupporterPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  region: string;
  areaOfAction: string;
  role: string;
  password: string;
  captchaToken: string;
  party?: string;
  referredByActivistCode?: string;
  isPtMember?: boolean;
  isMilitant?: boolean;
};
