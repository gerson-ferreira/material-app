import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, private cd: ChangeDetectorRef) {
    if (this.authService.loginStatusChanged) {
      this.authService.loginStatusChanged.subscribe(() => {
        this.cd.detectChanges();
      });
    }
  }

  isVerifyLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
