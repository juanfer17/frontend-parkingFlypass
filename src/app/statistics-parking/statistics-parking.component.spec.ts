import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsParkingComponent } from './statistics-parking.component';

describe('StatisticsParkingComponent', () => {
  let component: StatisticsParkingComponent;
  let fixture: ComponentFixture<StatisticsParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsParkingComponent]
    });
    fixture = TestBed.createComponent(StatisticsParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
