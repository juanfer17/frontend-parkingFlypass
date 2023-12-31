import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlypassParkingComponent} from "./flypass-parking/flypass-parking.component";
import {StatisticsParkingComponent} from "./statistics-parking/statistics-parking.component";
import {ExitFlypassParkingComponent} from "./exit-flypass-parking/exit-flypass-parking.component";

const routes: Routes = [
  { path: '', redirectTo: '/flypass-parking', pathMatch: 'full' },
  { path: 'flypass-parking', component: FlypassParkingComponent },
  { path: 'statistics-parking', component: StatisticsParkingComponent },
  { path: 'exit-flypass-parking', component: ExitFlypassParkingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
