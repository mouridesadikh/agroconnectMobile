import { Component, OnInit } from '@angular/core';
import{CooperativeServiceService} from'../../services/cooperative-service.service';
@Component({
  selector: 'app-cooperative',
  templateUrl: './cooperative.page.html',
  styleUrls: ['./cooperative.page.scss'],
})
export class CooperativePage implements OnInit {
  cooperatives : any;
  constructor( private cooperativesService  : CooperativeServiceService) { }

  ngOnInit() {
    this.cooperativesService.getAllCooperative().subscribe(res=>{
      this.cooperatives = res;
      
    })
  }

}
