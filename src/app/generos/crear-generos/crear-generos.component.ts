import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { GenerosService } from 'src/app/services/generos.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { generoDTO } from '../genero';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {

  errores: string[] = [];
  constructor(private _router: Router,
              private _generosService: GenerosService          
    ) { }
   guardarCambios(genero: Partial<generoDTO>) {
    // guardamos los cambios
    console.log(genero);

    this._generosService.crear(genero).subscribe(x => {

      this._router.navigate(['/generos']);
    
    }, error => this.errores = parsearErroresAPI(error));

  }

}
