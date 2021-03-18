// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

// BBDD
import * as firebase from "firebase";

// ##########################################################################################################


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) { }

  inicioSesion(userdata) {
    firebase.default.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
            .then( response =>  {
              console.log(response);
              this.router.navigate([ '/inicio' ])
            })
            .catch(
              error => {
                console.log(error);
              }
            )
  }

  isAuthenticated() {
    const user = firebase.default.auth().currentUser;
    if(user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.default.auth().signOut();
  }

}
