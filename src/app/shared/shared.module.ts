import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideNavMenuComponent, ToolbarMenuComponent],
  imports: [
    CommonModule,
    // Validar modulos
    MatIconModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule
    // Validar modulos
  ],
  exports: [SideNavMenuComponent, ToolbarMenuComponent],
})
export class SharedModule {}
