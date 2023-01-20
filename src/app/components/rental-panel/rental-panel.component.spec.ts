import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPanelComponent } from './rental-panel.component';

describe('RentalPanelComponent', () => {
  let component: RentalPanelComponent;
  let fixture: ComponentFixture<RentalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
