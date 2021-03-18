// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

// SERVICE
import { AuthenticationService } from "../authentication/services/authentication.service";

// ##########################################################################################################

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isAuth(){
    return this.authenticationService.isAuthenticated();
  }

  onLogout(){
    this.router.navigate([ '/inicio' ])
    return this.authenticationService.logout();
  }

}
