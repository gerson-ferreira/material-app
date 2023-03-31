import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SideNavMenuComponent } from './shared/side-nav-menu/side-nav-menu.component';
import { ToolbarMenuComponent } from './shared/toolbar-menu/toolbar-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './login/services/auth.service';

const authServiceMock = {
  isLoggedIn: jest.fn().mockReturnValue(true),
  login: jest.fn(),
  logout: jest.fn(),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      NoopAnimationsModule,
      SharedModule,
      RouterModule.forRoot([]),
    ],
    declarations: [AppComponent, SideNavMenuComponent, ToolbarMenuComponent],
    providers: [
      { provide: AuthService, useValue: authServiceMock },
      {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({
            get: (key: string) => {
              return 'fakeValue';
            },
          }),
          snapshot: {
            paramMap: {
              get: (key: string) => {
                return 'fakeValue';
              },
            },
          },
        },
      },
    ],
  }).compileComponents();

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
