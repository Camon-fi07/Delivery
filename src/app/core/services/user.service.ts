import { OtpResponse, SessionResponse, SignInResponse, SingInDto, User } from 'shared/types/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { OTP, SESSION, SIGNIN } from 'shared/constants/apiUrl';

@Injectable()
export class UserService {
  phone?: string;
  token?: string;
  user?: User;

  constructor(private http: HttpClient) {
    this.phone = localStorage.getItem('phone') || undefined;
    this.token = localStorage.getItem('token') || undefined;

    this.getSession();
  }

  getSession(): Observable<SessionResponse> {
    return this.http.get<SessionResponse>(SESSION, { headers: { Authorization: `Bearer ${this.token}` } }).pipe(
      map((res) => {
        this.user = res.user;
        return res;
      }),
      catchError((err) => {
        this.logOut();
        throw `ivalid data: ${err}`;
      }),
    );
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

  createOtp(phone: string): Observable<OtpResponse> {
    return this.http.post<OtpResponse>(OTP, { phone });
  }

  logIn(singInDto: SingInDto): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(SIGNIN, singInDto).pipe(
      map((res) => {
        this.saveUserData(res, singInDto.phone);
        return res;
      }),
    );
  }
}
