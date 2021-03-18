// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";

// @RXJS
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


// ##########################################################################################################

@Injectable({
  providedIn: 'root'
})
export class AddpersService {

  // @VARIABLES
  presURL= 'https://gibuild-9c83c-default-rtdb.europe-west1.firebasedatabase.app/personajes';

  constructor( private http: HttpClient ) { }

  postPersonaje(personajes: any): Observable <any>{
    const newpers = JSON.stringify(personajes);
    const header = new HttpHeaders({
     'Content-type': 'application/json'
    });

    return this.http.post( `${this.presURL}.json`, newpers, {headers: header}).pipe(
      map( res => {
        console.log(res);
        return res;
      }));
  }



}
