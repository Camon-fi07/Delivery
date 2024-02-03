export interface SingInDto {
  phone: string;
  code: number;
}

export interface UserDeliveryInfo {
  firstname: string;
  middlename?: string;
  lastname: string;
  phone: string;
}

export interface User {
  phone: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  city?: string;
}

export interface SessionResponse {
  success: boolean;
  user: User;
  reason: string;
}

export interface SignInResponse extends SessionResponse {
  token: string;
}

export interface OtpResponse {
  success: boolean;
  reason: string;
  retryDelay: number;
}

export interface Profile {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

export interface UpdateProfileDto {
  profile: Profile;
  phone: string;
}

export enum Payer {
  RECEIVER = 'RECEIVER',
  SENDER = 'SENDER',
}
