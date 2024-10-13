import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8001/Sneakz/login', loginData, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          // Handle successful login
          console.log(response);
          this.router.navigate(['/']); // Change to your dashboard route
        },
        error: (error) => {
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
      });
  }

 
 
}
