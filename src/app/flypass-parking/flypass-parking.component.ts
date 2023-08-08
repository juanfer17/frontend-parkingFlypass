import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flypass-parking',
  templateUrl: './flypass-parking.component.html',
  styleUrls: ['./flypass-parking.component.css']
})
export class FlypassParkingComponent implements OnInit{

  constructor(private fb: FormBuilder,
  private parkingFlypassService: ParkingFlypassService,
              private toastr: ToastrService
  ) {}
  form: FormGroup = new FormGroup({});
  maxSixCharactersPattern = /^.{1,6}$/;
  ngOnInit() {
    this.form = this.fb.group({
      plate: ['', [Validators.required, Validators.pattern(this.maxSixCharactersPattern)]],
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
            console.log('Respuesta del servicio frontend:', response);
            this.toastr.success('Transacción creada exitosamente', 'Éxito');
            this.form.reset();
          },
          error => {
            console.error('Error del servicio frontend:', error);
            this.toastr.error(error, 'Error');
          }
        );
      } else {
        this.toastr.error('Los controles del formulario son nulos', 'Error de datos');
      }
    } else {
      this.toastr.error('El formulario no es válido', 'Error de datos');
    }
  }

}
