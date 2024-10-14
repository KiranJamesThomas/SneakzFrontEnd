import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: string | null = null;

  private apiUrl = 'http://localhost:8001/Sneakz'; 

  constructor(private http: HttpClient) {
    this.loadUser();
    // Load user ID from local storage on service initialization
  }// Adjust to your backend URL


  loginUserId(userId: string): void {
    this.userId = userId; // Store user ID in memory
    localStorage.setItem('userId', userId); // Store in localStorage for persistence
  }

  logoutUserId(): void {
    this.userId = null; // Clear user ID from memory
    localStorage.removeItem('userId'); // Remove from localStorage
  }

  isLoggedIn(): boolean {
    return this.userId !== null; // Check if user is logged in
  }

  getUserId(): string | null {
    return this.userId; // Return the current user ID
  }

  private loadUser(): void {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = storedUserId; // Load user ID from local storage
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.userId) { // Assuming your response contains userId
          localStorage.setItem('userId', response.userId.toString()); // Store user ID in localStorage
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userId'); // Clear user ID on logout
  }
}
