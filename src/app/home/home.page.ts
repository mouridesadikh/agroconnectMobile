import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route : Router) {}



  gotToMarcheVirtuel(){
    this.route.navigateByUrl('marche-virtuel');
    
  }
  goToCooperative()
  {
    this.route.navigateByUrl('cooperative');
  }
  goToService()
  {
    this.route.navigateByUrl('service-digi');
  }
  goToMeteo()
  {
    this.route.navigateByUrl('meteo');
  }
  goToConseil(){
    this.route.navigateByUrl('conseil');
  }
}
