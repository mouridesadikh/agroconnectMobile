import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
 url = "http://127.0.0.1:8000/api/";
  constructor(public http: HttpClient) { }

  getAllAnnonces() {
    return this.http.get(this.url + 'liste/annonces');
  }
}
