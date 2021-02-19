import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private _generosService: GenerosService) { }

  ngOnInit(): void {
    this._generosService.obtenerTodos().subscribe( generos => {
      console.log(generos);

    }, error => console.error(error))
  }

}
