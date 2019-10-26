import { Annonce } from './../../model/annonce';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service';

@Component({
  selector: 'app-marche-virtuel',
  templateUrl: './marche-virtuel.page.html',
  styleUrls: ['./marche-virtuel.page.scss'],
})
export class MarcheVirtuelPage implements OnInit {
 annonces: Annonce[]
  constructor(private route : Router,public annonceService: AnnonceService) { }

  ngOnInit() {
    this.getAllAnnonces();
  }

  getAllAnnonces(){
    this.annonceService.getAllAnnonces().subscribe((resp: Annonce[] ) => {
      this.annonces =resp;
    });
  }
  openAnnonce()
  {
    this.route.navigateByUrl('annonce-detaille');
  }

}
