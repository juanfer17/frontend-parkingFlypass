import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlypassParkingComponent } from './flypass-parking.component';

describe('FlypassParkingComponent', () => {
  let component: FlypassParkingComponent;
  let fixture: ComponentFixture<FlypassParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlypassParkingComponent]
    });
    fixture = TestBed.createComponent(FlypassParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
