import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = true; // by default, Value should be False

  constructor() { }

  public login() {
    // Perform login logic, set isLoggedIn to true
    this.isLoggedIn = true;
  }

  public logout() {
    // Perform logout logic, set isLoggedIn to false
    this.isLoggedIn = false;
  }

  public loggedInStatus$(): Observable<boolean> {
    return of(this.isLoggedIn);
  }
}
