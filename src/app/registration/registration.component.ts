import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user!: User;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessages: string[] = [];
  constructor(private route: Router, private userService: UserService) { }

  goToHome() {
    this.route.navigate(['login']);
  }

  onSubmit() {
    this.errorMessages = [];

    if (this.password != this.confirmPassword) {
      this.errorMessages.push('Passwords do not match.');
    }

    if (this.errorMessages.length == 0) {
      this.user.password = this.password;
      this.user.uName = this.email
      this.userService.addUser(this.user).subscribe(
        response => {
          alert('Registration successful!');
        },
        error => {
          console.error(error);
          this.errorMessages.push('Registration failed. Please try again.');
        }
      );
    }
    this.goToHome();
  }

}
