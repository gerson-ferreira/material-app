import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.removeItem('authToken');
  });

  // Teste para verificar se o serviço foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Teste para verificar se o login bem-sucedido retorna a mensagem correta e emite o evento de mudança de status
  it('should login with valid credentials', (done) => {
    service.login('user1@example.com', 'password1').subscribe((result) => {
      expect(result.success).toBeTruthy();
      expect(result.message).toBe('Login bem-sucedido!');
      expect(service.isLoggedIn()).toBeTruthy();
      done();
    });
  });

  // Teste para verificar se o login com credenciais inválidas retorna a mensagem correta
  it('should not login with invalid credentials', (done) => {
    service.login('invalid@example.com', 'invalid_password').subscribe((result) => {
      expect(result.success).toBeFalsy();
      expect(result.message).toBe('Credenciais inválidas!');
      expect(service.isLoggedIn()).toBeFalsy();
      done();
    });
  });

  // Teste para verificar se o método isLoggedIn retorna o valor correto
  it('should return true if logged in', () => {
    localStorage.setItem('authToken', 'fake_token');
    expect(service.isLoggedIn()).toBeTruthy();
  });

  // Teste para verificar se o método logout remove o token e emite o evento de mudança de status
  it('should logout and remove token', () => {
    localStorage.setItem('authToken', 'fake_token');
    service.logout();
    expect(localStorage.getItem('authToken')).toBeNull();
    expect(service.isLoggedIn()).toBeFalsy();
  });
});
