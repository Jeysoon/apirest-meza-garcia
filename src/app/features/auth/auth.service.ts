import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthModule } from './auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  login(value: boolean) {
    this.loggedIn.next(value);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
