import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: "feñlipe", fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR4,0,182,268_AL_.jpg'}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id);
    })
  }
  guardarCambios(actor:actorCreacionDTO) {
    console.log(actor);
  }

}
