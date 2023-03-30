import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SideNavMenuComponent } from './shared/side-nav-menu/side-nav-menu.component';
import { ToolbarMenuComponent } from './shared/toolbar-menu/toolbar-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        NoopAnimationsModule,
        SharedModule
      ],
      declarations: [
        AppComponent,
        SideNavMenuComponent,
        ToolbarMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
