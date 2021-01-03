import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nombre: '' // valor inicial del campo
    })
  }

  guardarCambios() {
    // guardamos los cambios
    this.router.navigate(['/generos'])
  }
}
