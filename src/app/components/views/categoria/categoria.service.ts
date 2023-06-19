import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment.ts/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar){ }

  findAll(): Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria)
  }

  update(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${categoria.id}`
    return this.http.put<Categoria>(url, categoria)

  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }


  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }

 }
