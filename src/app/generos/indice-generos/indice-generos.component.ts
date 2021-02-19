import { HttpResponse } from '@angular/common/http';
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
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosParaMostrar = 10;
  constructor(private _generosService: GenerosService) { }

  ngOnInit(): void {
    this._generosService.obtenerTodos().subscribe( (response: HttpResponse<generoDTO[]>) => {

      this.generos = response.body;
      console.log(response.headers.get("cantidadTotalRegistros"));

      this.cantidadTotalRegistros = response.headers.get("cantidadTotalRegistros");

    }, error => console.error(error))
  }

}
