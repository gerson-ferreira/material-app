import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css'],
})
export class SideNavMenuComponent {
  @Input() sidenav: any;
  @Output() navClick = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onNavClick(): void {
    this.navClick.emit();
  }
}
