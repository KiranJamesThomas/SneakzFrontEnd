import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private baseUrl = 'http://localhost:8001/Sneakz/wishlist'; // Adjust this to your API endpoint

  constructor(private http: HttpClient) { }

  // Add a product to the wishlist
  addToWishlist(userId: string, productId: number): Observable<any> {
    const wishlistItem = { userId, productId }; // Adjust according to your backend schema
    return this.http.post(`${this.baseUrl}`, wishlistItem);
  }

  removeFromWishlist(userId: string, productId: number): Observable<any> {
    const wishlistItem = { userId, productId }; // Adjust according to your backend schema
    return this.http.post(`${this.baseUrl}`, wishlistItem);
  }

  // Optional: Fetch the wishlist for a user
  getWishlist(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}
