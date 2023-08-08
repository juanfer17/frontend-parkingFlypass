import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";
import {tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ParkingFlypassService {
  constructor(private http: HttpClient) {
  }

  createTransaction(plate: string, vehicleType: string) {
    const url = `${environment.apiUrlService}/${environment.prefixUrl}/${environment.api}/${environment.create}`;
    const requestTransactionCreate = [{
      plate: plate,
      vehicleType: vehicleType
    }];

    return this.http.post<AjaxResponse<any>>(url, requestTransactionCreate);
  }
}
