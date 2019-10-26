import { AnnonceService } from '../services/annonce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.page.html',
  styleUrls: ['./list-annonce.page.scss'],
})
export class ListAnnoncePage implements OnInit {

  constructor(public annonceService: AnnonceService) { }

  ngOnInit() {
    this.getAllAnnonces();
  }

  getAllAnnonces(){
    this.annonceService.getAllAnnonces().subscribe((resp ) => {
      console.log(resp + 'test');
    });
  }

}
