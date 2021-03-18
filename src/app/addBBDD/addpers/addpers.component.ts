// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

// @SERVICE
import { AddpersService } from "../servicios/addpers.service";

// ##########################################################################################################

@Component({
  selector: 'app-addpers',
  templateUrl: './addpers.component.html',
  styleUrls: ['./addpers.component.css']
})
export class AddpersComponent implements OnInit {

  // @VARIABLES
  personajeForm: FormGroup;
  personaje: any;
  nombre: any;
  imagen: any;
  elemento: any;
  estilo: any;

  erroresForm = {
    'nombre': ''
  };

  mensajesValidacion = {
    'nombre': {
      'required': 'Nombre personaje Obligatorio',
      'pattern': 'El nombre del personaje solo puede contener letras',
    }
  }


  constructor(private formBuilder: FormBuilder,
              private addpersService : AddpersService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.personajeForm = this.formBuilder.group({
      nombre: ['', [Validators.required,
                       Validators.pattern( '[a-zA-Z ]*' )]],
      elemento: ['', Validators.required ],
      estilo: ['', Validators.required ],
      imagen: ['', Validators.required ]
    });

    this.onValueChanged();
  }

  onChange(): void {
    this.personajeForm.valueChanges.subscribe(valor => {
      this.nombre = valor.nombre;
      this.imagen = valor.imagen;
      this.elemento = valor.elemento;
      this.estilo = valor.estilo;
    });
  }

  onValueChanged(data?: any) {
    if (!this.personajeForm) { return; }
    const form = this.personajeForm;
    for (const field in this.erroresForm) {

      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
         }
       } else {
        this.onChange();
       }
     }
   }

  onSubmit() {
    this.personaje = this.savePersonaje();
    this.addpersService.postPersonaje(this.personaje)
      .subscribe(newpers => {
        this.router.navigate(['/personajes']);
      });
    this.personajeForm.reset();
  }

  savePersonaje() {

    const savePersonaje = {
      nombre: this.personajeForm.get('nombre').value,
      imagen: this.personajeForm.get('imagen').value,
      elemento: this.personajeForm.get('elemento').value,
      estilo: this.personajeForm.get('estilo').value
    }

    return savePersonaje;
  }

}
