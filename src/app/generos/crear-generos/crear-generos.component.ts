import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {

  constructor(private router: Router) { }
   guardarCambios(genero: generoCreacionDTO) {
    // guardamos los cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
