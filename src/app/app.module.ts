import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './login/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
