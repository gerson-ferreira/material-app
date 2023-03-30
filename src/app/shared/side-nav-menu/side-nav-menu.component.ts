import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent {
  @Input() sidenav: any;
  @Input() toggleSidenav: () => void = () => {};
}
