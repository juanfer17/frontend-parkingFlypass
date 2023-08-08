import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-statistics-parking',
  templateUrl: './statistics-parking.component.html',
  styleUrls: ['./statistics-parking.component.css']
})
export class StatisticsParkingComponent implements OnInit{

  constructor(private fb: FormBuilder,
    private parkingFlypassService: ParkingFlypassService,
              private toastr: ToastrService) {}

  form: FormGroup = new FormGroup({});
  averageTransactionsResponse: any = '';
  maxTimeServiceResponse: any = '';

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
            this.toastr.success('Transacción exitosa', 'Éxito');
            this.averageTransactionsResponse = response.message;
            this.hideCardsAfterDelay();
          },
          (error) => {
            this.toastr.error('Error en la transacción', 'Error');
            console.error('Error from getAverageTransactions:', error);
          }
        );
        this.form.reset();
      } else {
        this.toastr.error('Datos de formulario nulos', 'Error');
      }
    } else {
      this.toastr.error('Formulario invalido', 'Error');
    }
  }

  getMaxTimeService() {
    this.parkingFlypassService.getMaxTimeService().subscribe(
      (response) => {
        console.log('Response from getMaxTimeService:', response);
        this.toastr.success('Transacción exitosa', 'Éxito');
        this.maxTimeServiceResponse = response.message;
        this.hideCardsAfterDelay();
      },
      (error) => {
        this.toastr.error('Error en la transacción', 'Error');
        console.error('Error from getMaxTimeService:', error);
      }
    );
  }

  hideCardsAfterDelay() {
    setTimeout(() => {
      this.averageTransactionsResponse = null;
      this.maxTimeServiceResponse = null;
    }, 10000);
  }

}
