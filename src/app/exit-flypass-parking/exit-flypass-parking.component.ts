import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";

@Component({
  selector: 'app-exit-flypass-parking',
  templateUrl: './exit-flypass-parking.component.html',
  styleUrls: ['./exit-flypass-parking.component.css']
})
export class ExitFlypassParkingComponent implements OnInit{

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
      if (plateControl) {
        const plateValue = plateControl.value;
        // Llamar al servicio para crear la transacción
        this.parkingFlypassService.endTransaction(plateValue).subscribe(
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
