import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ RouterLink, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  isLoggedIn: boolean = false;
  buttonText: string = 'Login';

  constructor() {
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn() {
    const userId = localStorage.getItem('userId');
    this.isLoggedIn = userId !== null; // Set true if userId exists
    this.buttonText = this.isLoggedIn ? 'Logout' : 'Login'; // Update button text
  }

  toggleLoginLogout() {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      // Here you would navigate to your login page or show login modal
      console.log("Redirect to login or show login modal");
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.isLoggedIn = false;
    this.buttonText = 'Login'; // Reset button text
  }

}
