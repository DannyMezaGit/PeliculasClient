import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/services/generos.service';
import { generoDTO } from '../genero';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  generos: generoDTO[] = [];
  columnasParaMostrar = ['id', 'nombre', 'acciones'];
  constructor(private _generosService: GenerosService) { }

  ngOnInit(): void {
    this._generosService.obtenerTodos().subscribe( generos => {

      this.generos = generos;
      console.log(generos);

    }, error => console.error(error))
  }

}
