import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        console.log('Connexion réussie');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Échec de la connexion');
        alert("Échec de la connexion")
      }
    }
  }
}
