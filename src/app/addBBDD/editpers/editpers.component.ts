// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

// @SERVICES
import { EditpersService } from "../servicios/editpers.service";
import { PersonajeService } from "../../personajes/servicios/personaje.service";

// ##########################################################################################################

@Component({
  selector: 'app-editpers',
  templateUrl: './editpers.component.html',
  styleUrls: ['./editpers.component.css']
})
export class EditpersComponent implements OnInit {

  // @VARIABLES
  personajeForm: FormGroup;
  personajes: any;
  nombre: any;
  imagen; any;
  elemento: any;
  estilo: any;
  id: string;

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
              private editpersService : EditpersService,
              private personajeService: PersonajeService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {

      this.activatedRouter.params
          .subscribe(parametros => {
            this.id = parametros['id'];
            this.personajeService.getPersonaje(this.id)
                .subscribe( personajes => this.personajes = personajes)
          });
  }

  ngOnInit(): void {
    this.personajeForm = this.formBuilder.group({
      nombre: ['', [Validators.required,
                    Validators.pattern( '[a-zA-Z ]*' )]],
      imagen: ['', Validators.required ],
      elemento: ['', Validators.required ],
      estilo: ['', Validators.required ]
    });

    this.onValueChanged();
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

  onChange(): void {
    this.personajeForm.valueChanges.subscribe(valor => {
      this.nombre = valor.personaje;
      this.imagen = valor.imagen;
      this.elemento = valor.elemento;
      this.estilo = valor.estilo;
    });
  }

  onSubmit() {
    this.personajes = this.savePersonaje();
    this.editpersService.putPersonaje(this.personajes, this.id)
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
