import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8001/Sneakz/user';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
   return this.http.post<any>(this.apiUrl,user)
  }
}
