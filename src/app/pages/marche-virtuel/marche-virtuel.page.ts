import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marche-virtuel',
  templateUrl: './marche-virtuel.page.html',
  styleUrls: ['./marche-virtuel.page.scss'],
})
export class MarcheVirtuelPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  openAnnonce()
  {
    this.route.navigateByUrl('annonce-detaille');
  }

}
