import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/app/environment.ts/environment';
import { Jogo } from './jogo.model';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Jogo[]>{
    const url = `${this.baseUrl}/jogos`
    return this.http.get<Jogo[]>(url)
  }

  findAllCategorias():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url);
  }

  create(jogo: Jogo, id: String): Observable<Jogo>{
    const url = `${this.baseUrl}/jogos?categoria=${id}`
    return this.http.post<Jogo>(url, jogo);
  }

  update(jogo: Jogo): Observable<Jogo>{
    const url = `${this.baseUrl}/jogos/${jogo.id}`
    return this.http.put<Jogo>(url, jogo)
  }

  findById(id: String): Observable<Jogo>{
    const url = `${this.baseUrl}/jogos/${id}`
    return this.http.get<Jogo>(url)
  }
  

  delete(id: String): Observable<any>{
    const url = `${this.baseUrl}/jogos/${id}`;
    return this.http.delete(url);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}