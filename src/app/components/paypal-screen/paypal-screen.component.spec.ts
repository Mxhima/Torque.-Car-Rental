import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalScreenComponent } from './paypal-screen.component';

describe('PaypalScreenComponent', () => {
  let component: PaypalScreenComponent;
  let fixture: ComponentFixture<PaypalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
