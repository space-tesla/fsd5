import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidationComponent } from './user-validation.component';

describe('UserValidationComponent', () => {
  let component: UserValidationComponent;
  let fixture: ComponentFixture<UserValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserValidationComponent]
    });
    fixture = TestBed.createComponent(UserValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
