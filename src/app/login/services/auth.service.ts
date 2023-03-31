import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// Mock de usuários
const users = [
  {
    email: 'user1@example.com',
    password: 'password1',
  },
  {
    email: 'user2@example.com',
    password: 'password2',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  loginStatusChanged: Subject<boolean>;

  constructor() {
    this.loginStatusChanged = new Subject<boolean>();
  }

  login(email: string, password: string) {
    return of(users).pipe(
      delay(1000),
      map((users) => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          localStorage.setItem('authToken', 'fake_token');
          this.loginStatusChanged.next(true);
          return { success: true, message: 'Login bem-sucedido!' };
        } else {
          return { success: false, message: 'Credenciais inválidas!' };
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loginStatusChanged.next(false);
  }

}
