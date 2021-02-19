import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoDTO } from '../generos/genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private _apiURL = `${environment.apiURL}Generos`;
  constructor(private _http: HttpClient) { }


  public obtenerTodos(): Observable<any> {
    return this._http.get<any>(this._apiURL, {observe: 'response'});
  }

  public crear(genero: Partial<generoDTO>) {
    return this._http.post(this._apiURL, genero);
  }
}
