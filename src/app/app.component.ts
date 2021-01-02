import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-Man',
      fechaLanzamiento: new Date(),
      precio: 1400.56
      },
      {
        titulo: 'Mohana',
      fechaLanzamiento: new Date('2017-05-13'),
      precio: 1400.56
      },
    ]
  }
  peliculasEnCines;
  peliculasProximosEstrenos = [
    {
      titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 1400.56
    },
    {
      titulo: 'Mohana',
    fechaLanzamiento: new Date('2017-05-13'),
    precio: 1400.56
    },
    {
      titulo: 'Mohana II',
    fechaLanzamiento: new Date('2017-05-13'),
    precio: 1400.56
    },
  ];
  title = 'front-end';

  manejarRated(voto: number): void {
    alert(voto);
  }
  
}
