import { BaseResponse } from './Response';

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

export interface SessionResponse extends BaseResponse {
  user: User;
}

export interface SignInResponse extends SessionResponse {
  token: string;
}

export interface OtpResponse extends BaseResponse {
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
