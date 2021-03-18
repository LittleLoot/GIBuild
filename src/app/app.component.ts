// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component } from '@angular/core';

// IMPORTS BBDD
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyD9RbrTF2zbsMR1XNTQPbeb9mlx128EIEM",
      authDomain: "gibuild-9c83c.firebaseapp.com",
    });
  }

}
