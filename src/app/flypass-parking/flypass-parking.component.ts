import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";

@Component({
  selector: 'app-flypass-parking',
  templateUrl: './flypass-parking.component.html',
  styleUrls: ['./flypass-parking.component.css']
})
export class FlypassParkingComponent implements OnInit{

  constructor(private fb: FormBuilder,
  private parkingFlypassService: ParkingFlypassService
  ) {}
  form: FormGroup = new FormGroup({});
  ngOnInit() {
    this.form = this.fb.group({
      plate: ['', [Validators.required]],
      vehicleType: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form && this.form.valid) {
      const plateControl = this.form.get('plate');
      const vehicleTypeControl = this.form.get('vehicleType');

      if (plateControl && vehicleTypeControl) {
        const plateValue = plateControl.value;
        const vehicleTypeValue = vehicleTypeControl.value;
        // Llamar al servicio para crear la transacción
        this.parkingFlypassService.createTransaction(plateValue, vehicleTypeValue).subscribe(
          response => {
            console.log('Response from frontend service:', response);
            // Resto del código de manejo de respuesta...
          },
          error => {
            console.error('Error from frontend service:', error);
            // Resto del código de manejo de error...
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

}
