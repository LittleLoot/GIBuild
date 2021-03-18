// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

// Services

import { AuthenticationService } from "../services/authentication.service";

// ##########################################################################################################



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // Variables
  loginForm: FormGroup;
  userdata: any;

  errorSesion = false;
  correctaSesion = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', [ Validators.required, Validators.email ]],
      'password': ['', [ Validators.required ]]
    });
  }

  onSubmit(){
    this.userdata = this.saveUserdata();
    this.authenticationService.inicioSesion(this.userdata);

    setTimeout(() => {
      if(this.isAuth() === false) {
        this.errorSesion = true;
      }
    }, 2000);

  }

  saveUserdata(){
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    return saveUserdata;
  }

  isAuth(){
    return this.authenticationService.isAuthenticated();
  }

}
