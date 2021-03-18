// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";

// @RXJS
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

// @SERVICES
import { AddpersService } from "../../addBBDD/servicios/addpers.service";


// ##########################################################################################################

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  // @VARIABLES
  presURL= 'https://gibuild-9c83c-default-rtdb.europe-west1.firebasedatabase.app/personajes';

  constructor( private http: HttpClient ) { }

  getPersonajes() {
    return this.http.get( `${this.presURL}.json` )
      .pipe(
        map( res => res)
      );
  }

  getPersonaje(id$: string) {
    const url = `${this.presURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(
        map(res => res)
      );
  }
}
