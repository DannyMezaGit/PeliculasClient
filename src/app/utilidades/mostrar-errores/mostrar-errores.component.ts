import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-errores',
  templateUrl: './mostrar-errores.component.html',
  styles: [
    `
      li {
        color: red;
      }
    `
  ]
})
export class MostrarErroresComponent implements OnInit {
@Input() errores: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
