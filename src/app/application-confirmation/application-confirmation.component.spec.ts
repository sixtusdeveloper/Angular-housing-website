import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationConfirmationComponent } from './application-confirmation.component';

describe('ApplicationConfirmationComponent', () => {
  let component: ApplicationConfirmationComponent;
  let fixture: ComponentFixture<ApplicationConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationConfirmationComponent]
    });
    fixture = TestBed.createComponent(ApplicationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
