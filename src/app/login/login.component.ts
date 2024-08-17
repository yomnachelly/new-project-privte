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
  email: string = '';
  passwordError: boolean = false;
  rememberMe: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    // Afficher les données entrées dans la console
    console.log('Nom d\'utilisateur:', this.username);
    console.log('Mot de passe:', this.password);
    console.log('gmail:', this.email);
  
    if (this.username && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        (response) => {
          console.log('Connexion réussie');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log('Échec de la connexion');
          alert("Échec de la connexion");
          this.passwordError = true;
        }
      );
    } else {
      console.log('Veuillez entrer un nom d\'utilisateur et un mot de passe');
      alert("Veuillez entrer un nom d\'utilisateur et un mot de passe");
    }
  }
}
