// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component, OnInit } from '@angular/core';

// SERVICE
import { AuthenticationService } from "../../authentication/services/authentication.service";
import { PersonajeService } from "../servicios/personaje.service";
import { EditpersService } from "../../addBBDD/servicios/editpers.service";


// ##########################################################################################################

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  // @VARIABLES
  personajes: any[] = [];

  constructor(private authenticationService: AuthenticationService,
              private personajeService: PersonajeService,
              private editpersService: EditpersService) {
    this.recargarPersonaje();
  }

  ngOnInit(): void {
  }

  eliminarPersonaje(id$){
    this.editpersService.delPersonaje(id$)
        .subscribe( res => {
          this.personajes = [];
          this.recargarPersonaje();
        })
  }

  recargarPersonaje(){
    this.personajeService.getPersonajes()
      .subscribe(personajes => {
        for (const id$ in personajes){
          const p = personajes[id$];
          p.id$ = id$;
          this.personajes.push(personajes[id$]);
        }
      });
  }

  isAuth(){
    return this.authenticationService.isAuthenticated();
  }

}
