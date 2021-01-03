import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) {

   }

   form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });
  }

  guardarCambios() {
    // guardamos los cambios
    this.router.navigate(['/generos'])
  }
  obtenerErrorCampoNombre() {
    
    let campo = this.form.get('nombre');

    if(campo.hasError('required')){
      return 'El campo es requerido'
    }
    if (campo.hasError('minlength')) {
      return "La longitud mínima es 3"
    }

    return '';
  }
}
