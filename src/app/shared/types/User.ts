export interface SingInDto {
  phone: string;
  otp: number;
}

export interface User {
  phone: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  city: string;
}

export interface SessionResponse {
  success: boolean;
  user: User;
  reason: string;
}

export interface SignInResponse extends SessionResponse {
  token: string;
}
