import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';


@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  modelo: PeliculaDTO;
  
  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [ '', { validators: [Validators.required]}],
      resumen: [ '', { validators: [Validators.required]}],
      enCines: [ true, { validators: [Validators.required]}],
      trailer: [ '', { validators: [Validators.required]}],
      fechaLanzamiento: [ '', { validators: [Validators.required]}],
      poster: [ '', { validators: [Validators.required]}],
    });
    
    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }
  guardarCambios() {
    this.OnSubmit.emit(this.form.value);
  }
}