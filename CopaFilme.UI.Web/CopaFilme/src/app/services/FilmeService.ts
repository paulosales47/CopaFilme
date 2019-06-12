import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Filme } from "../models/Filme";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable()
export class FilmeService{

    _apiUrl = environment.API_URL;

    _httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
    })};

    constructor(private http: HttpClient){}

    ListarFilmes(): Observable<Filme[]>{
        return this.http.get<Filme[]>(this._apiUrl)
        .pipe(
            map((resposta: any) => resposta)
        );
    }

    RealizarCampeonato(filmesSelcionados: string[]): Observable<Filme[]>{
        return this.http.post<Filme[]>(this._apiUrl, JSON.stringify(filmesSelcionados), this._httpOptions)
        .pipe(
            map((resposta: any) => resposta)
        );
    }

    
}