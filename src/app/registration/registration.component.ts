import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessages: string[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.errorMessages = []; // Clear previous error messages

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
    if (!emailRegex.test(this.email)) {
      this.errorMessages.push('Please enter a valid email address');
    }

    // Validate password match
    if (this.password !== this.confirmPassword) {
      this.errorMessages.push('Passwords do not match.');
    }

    // If there are no errors, proceed with the registration
    if (this.errorMessages.length === 0) {
      const userData = {
        email: this.email,
        password: this.password
      };

      // Send the data to the backend
      this.http.post('http://localhost:8001/Sneakz/register', userData)
        .subscribe({
          next: () => {
            alert('Registration successful!');
            this.router.navigate(['/login-page']); // Redirect to login or another page
          },
          error: (error) => {
            this.errorMessages.push('Registration failed. Please try again.'); // Handle error appropriately
            console.error('Registration error:', error);
          }
        });
    }
  }
}
