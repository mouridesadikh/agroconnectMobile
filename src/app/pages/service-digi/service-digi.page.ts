import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-digi',
  templateUrl: './service-digi.page.html',
  styleUrls: ['./service-digi.page.scss'],
})
export class ServiceDigiPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }


  goToService(){
      this.route.navigateByUrl('service-page');
  }
}
