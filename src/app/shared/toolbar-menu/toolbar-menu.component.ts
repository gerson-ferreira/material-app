import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css'],
})
export class ToolbarMenuComponent {
  @Input() toggleSidenav: () => void = () => {};
}
