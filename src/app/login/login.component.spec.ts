import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jest.Mocked<AuthService>;
  let router: jest.Mocked<Router>;
  let snackBar: jest.Mocked<MatSnackBar>;

  beforeEach(async () => {
    const authServiceMock: Partial<AuthService> = {
      login: jest.fn(),
    };

    const routerMock: Partial<Router> = {
      navigate: jest.fn(),
    };

    const snackBarMock: Partial<MatSnackBar> = {
      open: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: MatSnackBar, useValue: snackBarMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jest.Mocked<AuthService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
    snackBar = TestBed.inject(MatSnackBar) as jest.Mocked<MatSnackBar>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login with valid email and password', fakeAsync(() => {
    authService.login.mockReturnValue(
      of({ success: true, message: 'Login bem-sucedido!' })
    );

    component.loginForm.setValue({
      email: 'user1@example.com',
      password: 'password1',
    });

    component.onSubmit();
    flush();

    expect(authService.login).toHaveBeenCalledWith(
      'user1@example.com',
      'password1'
    );
    expect(router.navigate).toHaveBeenCalledWith(['/products']);
  }));
});
