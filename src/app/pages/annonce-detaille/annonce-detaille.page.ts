import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-annonce-detaille',
  templateUrl: './annonce-detaille.page.html',
  styleUrls: ['./annonce-detaille.page.scss'],
})
export class AnnonceDetaillePage implements OnInit {
  annonce : any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.annonce) {
        this.annonce = JSON.parse(params.annonce);
      }
    });
   }

  ngOnInit() {
  }

}
