import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMenuComponent } from './side-nav-menu.component';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../../login/services/auth.service';

describe('SideNavMenuComponent', () => {
  let component: SideNavMenuComponent;
  let fixture: ComponentFixture<SideNavMenuComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [SideNavMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
