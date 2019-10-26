import { Component, OnInit } from '@angular/core';
import { ConseilServiceService } from 'src/app/services/conseil-service.service';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.page.html',
  styleUrls: ['./conseil.page.scss'],
})
export class ConseilPage implements OnInit {
   conseils : any;
  constructor(private conseil : ConseilServiceService ) { }

  ngOnInit() {
     this.conseil.getAllConseil().subscribe(res=>{
      this.conseils = res;
      console.log(res);
      
    })
  }

  

}
