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
export class EditpersService {

  // @VARIABLES
  presURL= 'https://gibuild-9c83c-default-rtdb.europe-west1.firebasedatabase.app/personajes';

  constructor( private http: HttpClient ) { }

  putPersonaje(personajes: any, id$: string) {
    const newpers = JSON.stringify(personajes);
    const header =  new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.presURL}/${id$}.json`;

    return this.http.put( url, newpers, {headers: header})
    .pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  delPersonaje( id$: string) {
    const url = `${this.presURL}/${id$}.json`;
    return this.http.delete( url )
                .pipe(map(res => res ));
  }

}
