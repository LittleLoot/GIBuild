// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// @SERVICE
import { AddpersService } from "./servicios/addpers.service";
import { EditpersService } from "./servicios/editpers.service";

// @COMPONENT
import { AddpersComponent } from './addpers/addpers.component';
import { AddweaponComponent } from './addweapon/addweapon.component';
import { EditpersComponent } from './editpers/editpers.component';

// ##########################################################################################################

@NgModule({
  declarations: [AddpersComponent, AddweaponComponent, EditpersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AddpersService, EditpersService]
})
export class AddBBDDModule { }
