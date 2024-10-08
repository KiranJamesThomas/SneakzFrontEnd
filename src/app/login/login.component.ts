import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router) { }

  goToHome() {
    this.route.navigate(['home']);
  }
  goToRegistration() {
    this.route.navigate(['registration']);
  }
  goToAdmin() {
    this.route.navigate(['admin-login']);
  }
 
}
