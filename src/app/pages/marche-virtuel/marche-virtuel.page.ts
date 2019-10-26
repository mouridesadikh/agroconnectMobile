import { Annonce } from './../../model/annonce';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service';
import { CategorieServiceService } from 'src/app/services/categorie-service.service';

@Component({
  selector: 'app-marche-virtuel',
  templateUrl: './marche-virtuel.page.html',
  styleUrls: ['./marche-virtuel.page.scss'],
})
export class MarcheVirtuelPage implements OnInit {
 annonces: Annonce[];
 categories : any ;
 sousCategorie : any;
 categorieName  : any;
  constructor(private route : Router,public annonceService: AnnonceService, private categorieService : CategorieServiceService) { }

  ngOnInit() {
    this.getAllAnnonces();
    this.categorieService.getCategories().subscribe(res=>{
      this.categories = res;
      console.log(res);
      
    })
  }

  getAllAnnonces(){
    this.annonceService.getAllAnnonces().subscribe((resp: Annonce[] ) => {
      this.annonces =resp;
    });
  }
  openAnnonce(item)
  {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        annonce: JSON.stringify(item)
      }
    };
    console.log(item);
    
    this.route.navigate(['annonce-detaille'], navigationExtras);

  }

  getSousCategorie(item)
  {
    console.log(item.target.value);
    console.log(this.categories);
    
    this.categories.forEach(res => {
      if(res.id = item.target.value)
      {
        this.sousCategorie = res.sous_categories;
      }
    });
    console.log(this.sousCategorie);
    
  }
}
