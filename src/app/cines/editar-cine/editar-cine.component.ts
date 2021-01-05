import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }
   
  modelo: cineDTO = {nombre: "Sambil", latitud: 27.483888794883615, longitud: -109.96014547357846}
  ngOnInit(): void {
  }

  guardarCambios(cine: cineDTO) {
    console.log(cine);
  }
}
