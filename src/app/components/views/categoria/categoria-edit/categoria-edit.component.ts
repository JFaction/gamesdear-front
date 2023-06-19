import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit{

  id: String = ""


  categoria: Categoria = {
    id: '',
    nome: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
    })
  }

  edit(): void{
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria atualizada!');
    }, err => {
      this.service.mensagem('Verifique se os campos estão preenchidos.')
    })
  }




}
