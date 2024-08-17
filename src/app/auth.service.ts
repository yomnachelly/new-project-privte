import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthResponse } from './models/auth-response.model'; // Update with the correct path

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  createNewUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}user/register`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.url}user/login`, { email, password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }
}
