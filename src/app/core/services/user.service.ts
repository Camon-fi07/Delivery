import { SessionResponse, SignInResponse, SingInDto, User } from 'shared/types/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { OTP, SESSION, SIGNIN } from 'shared/constants/apiUrl';

@Injectable()
export class UserService {
  phone?: string;
  token?: string;
  user?: User;

  constructor(private http: HttpClient) {
    this.phone = localStorage.getItem('phone') || undefined;
    this.token = localStorage.getItem('token') || undefined;

    this.getSession().subscribe({
      next: (res) => {
        this.user = res.user;
        console.log(res);
      },
      error: this.logOut,
    });
  }

  getSession() {
    return this.http.get<SessionResponse>(SESSION, { headers: { Authorization: `Bearer ${this.token}` } });
  }

  logOut() {
    localStorage.removeItem('phone');
    localStorage.removeItem('token');
    this.phone = undefined;
    this.token = undefined;
  }

  private saveUserData({ token, user }: SignInResponse, phone: string) {
    localStorage.setItem('phone', phone);
    this.phone = phone;
    localStorage.setItem('token', token);
    this.token = token;
    this.user = user;
  }

  createOtp(phone: string) {
    return this.http.post(OTP, { phone });
  }

  logIn(singInDto: SingInDto) {
    return this.http.post<SignInResponse>(SIGNIN, singInDto).pipe(
      map((res) => {
        this.saveUserData(res, singInDto.phone);
        return res;
      }),
    );
  }
}
