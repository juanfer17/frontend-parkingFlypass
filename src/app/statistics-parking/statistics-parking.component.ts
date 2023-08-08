import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";

@Component({
  selector: 'app-statistics-parking',
  templateUrl: './statistics-parking.component.html',
  styleUrls: ['./statistics-parking.component.css']
})
export class StatisticsParkingComponent implements OnInit{

  constructor(private fb: FormBuilder,
    private parkingFlypassService: ParkingFlypassService) {}

  form: FormGroup = new FormGroup({});
  averageTransactionsResponse: string = '';
  maxTimeServiceResponse: string = '';

  ngOnInit() {
    this.form = this.fb.group({
      vehicleType: ['', [Validators.required]]
    });
  }

  getAverageTransactions() {
    if (this.form && this.form.valid) {
      const vehicleTypeControl = this.form.get('vehicleType');

      if (vehicleTypeControl) {
        const vehicleTypeValue = vehicleTypeControl.value;
        // Llamar al servicio para crear la transacción
        this.parkingFlypassService.getAverageTransactions(vehicleTypeValue).subscribe(
          (response) => {
            console.log('Response from getAverageTransactions:', response);
            this.averageTransactionsResponse = response;
          },
          (error) => {
            console.error('Error from getAverageTransactions:', error);
          }
        );
        this.form.reset();
      } else {
        console.log('Form controls are null');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  getMaxTimeService() {
    this.parkingFlypassService.getMaxTimeService().subscribe(
      (response) => {
        console.log('Response from getMaxTimeService:', response);
        this.maxTimeServiceResponse = response;
      },
      (error) => {
        console.error('Error from getMaxTimeService:', error);
      }
    );
  }

}
