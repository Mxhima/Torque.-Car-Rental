import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsScreenComponent } from './cars-screen.component';

describe('CarsScreenComponent', () => {
  let component: CarsScreenComponent;
  let fixture: ComponentFixture<CarsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
