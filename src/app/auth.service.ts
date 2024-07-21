import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private url = 'http://127.0.0.1:3000/';






 /* login(username: string, password: string): boolean {
    // Ajoutez ici la logique d'authentification réelle
    // Par exemple, vous pouvez vérifier les informations d'identification auprès d'une API
    if (username === 'yomna chelly' && password === 'chelly2004'|| username === 'admin' && password === 'admin') {
      return true;
    }
    return false;
  }*/
}
