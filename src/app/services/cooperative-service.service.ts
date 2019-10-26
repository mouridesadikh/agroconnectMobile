import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Annonce} from '../model/annonce';
const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CooperativeServiceService {

  url = "http://127.0.0.1:8000/api/";

  constructor(public http: HttpClient) { }

  getAllCooperative():Observable<{}> {
    return this.http.get(this.url + 'liste/cooperatives',HttpOptions);
  }

}



