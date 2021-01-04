import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, 
               private location: Location,
               private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama'},
    { id: 2, nombre: 'Suspenso'},
    { id: 3, nombre: 'Terror'},
  ];

  peliculas = [
    { titulo: 'Spider-man Far From Home', enCines: false, proximosEstrenos: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    { titulo: 'Moana', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    { titulo: 'Fas & Furious', enCines: false, proximosEstrenos: false, generos: [1,3], poster: 'https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY268_CR1,0,182,268_AL_.jpg'},
  ];

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();

    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      });

  }

  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe(params => {
      let objeto: any = {};
      if (params.titulo){
        objeto.titulo = params.titulo;
      }
      if (params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    })
  }

  private escribirParametrosBusquedaEnURL() {
    let queryStrings = [];

    let valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    if (valoresFormulario.generoId != '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }
    if (valoresFormulario.proximosEstrenos) {
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if (valoresFormulario.enCines) {
      queryStrings.push(`proximosEstrenos=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryStrings.join('&'))
  }

  buscarPeliculas(valores: any){
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }
    if (valores.generoId !==0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }

}
