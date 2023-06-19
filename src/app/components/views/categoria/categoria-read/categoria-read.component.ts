import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit{

  categorias: Categoria[] = []
  displayColumns: string[] = ['id', 'nome', 'opcoes'];


  constructor(private service: CategoriaService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta
    })
  }

  delete(id: String){
    this.service.delete(id).subscribe(() => {
      this.service.mensagem("Categoria excluida com sucesso!")
      this.atualizarPagina();
    }, (error) =>{
      this.service.mensagem('Erro ao excluir: '+ error);
    })
  }

  atualizarPagina() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }


}
