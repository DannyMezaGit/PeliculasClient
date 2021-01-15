import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {
    titulo: 'Spider-Man 2',
    trailer: 'este es un trailer',
    enCines: true,
    resumen: 'una pelicula muy chila',
    fechaLanzamiento: new Date(),
    poster: 'https://m.media-amazon.com/images/M/MV5BYjA1ZTU4ZTYtYzNjMS00NGY2LTk1NTEtZGY3MzY1ZTY0OWJlXkEyXkFqcGdeQXVyMTA1Njg0NjI2._V1_UY268_CR2,0,182,268_AL_.jpg'
  }

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaDTO){
    console.log(pelicula);
  }

}
