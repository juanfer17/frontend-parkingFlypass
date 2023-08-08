import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingFlypassService} from "../common/services/parkingFlypass";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exit-flypass-parking',
  templateUrl: './exit-flypass-parking.component.html',
  styleUrls: ['./exit-flypass-parking.component.css']
})
export class ExitFlypassParkingComponent implements OnInit{

  constructor(private fb: FormBuilder,
              private parkingFlypassService: ParkingFlypassService,
              private toastr: ToastrService
  ) {}
  form: FormGroup = new FormGroup({});
  maxSixCharactersPattern = /^.{1,6}$/;
  ngOnInit() {
    this.form = this.fb.group({
      plate: ['', [Validators.required, Validators.pattern(this.maxSixCharactersPattern)]],
    });
  }

  onSubmit() {
    if (this.form && this.form.valid) {
      const plateControl = this.form.get('plate');
      if (plateControl) {
        const plateValue = plateControl.value;
        this.parkingFlypassService.endTransaction(plateValue).subscribe(
          response => {
            console.log('Exitoso:', response);
            this.toastr.success('Transacción exitosa', 'Éxito');
          },
          error => {
            console.error('Error:', error);
            this.toastr.error('Error en la transacción', 'Error');
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

}
