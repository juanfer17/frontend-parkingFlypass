import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'parkingFlypass';

  constructor(private router: Router) {}
  ngOnInit() {
  }

  flypassParking() {
    this.router.navigate(['/flypass-parking']);
  }

  statisticsParking() {
    this.router.navigate(['/statistics-parking']);
  }
}

