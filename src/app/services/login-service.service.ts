import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/loginmodel';
import { InscriptionModel } from '../model/inscription-model';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProduitLoginServiceServicesService {
  
  result: any;
  url = 'http://192.168.1.21:80/api/login';
  url_incription = 'http://192.168.1.21:80/api/inscription';
  constructor(private http: HttpClient) { 
  }

  //recupére la liste des produits
  checkconnexion(login : LoginModel): Observable<any> {
    return this.http.post<LoginModel>(this.url,login,HttpOptions);
  }

  inscription(user : InscriptionModel): Observable<any>{
    return this.http.post<InscriptionModel>(this.url_incription, user, HttpOptions);
  }
}
