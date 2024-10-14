import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../model/User';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  goToRegistration() {
    this.router.navigate(['registration']);
  }
  goToAdmin() {
    this.router.navigate(['admin-login']);
  }


  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  uid?: number;

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(this.email, this.password).subscribe(
        (user: User) => {
          // Handle successful login
          console.log(user);
          localStorage.setItem('userId', user.id.toString());
          this.router.navigate(['/']); // Change to your dashboard route
        },
        (error) => {
          // Handle login error
          if (error.status === 404) {
            this.errorMessage = 'User not found';
          } else if (error.status === 401) {
            this.errorMessage = 'Invalid password';
          } else {
            this.errorMessage = 'An unexpected error occurred';
          }
          console.error('Login error', error);
        }
      );
  }

 
 
}
