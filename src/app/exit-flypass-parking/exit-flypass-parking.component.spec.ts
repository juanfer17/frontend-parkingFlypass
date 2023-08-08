import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitFlypassParkingComponent } from './exit-flypass-parking.component';

describe('ExitFlypassParkingComponent', () => {
  let component: ExitFlypassParkingComponent;
  let fixture: ComponentFixture<ExitFlypassParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExitFlypassParkingComponent]
    });
    fixture = TestBed.createComponent(ExitFlypassParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
