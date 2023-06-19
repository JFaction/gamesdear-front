import { Component, OnInit } from '@angular/core';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from '../../categoria/categoria.model';

@Component({
  selector: 'app-jogo-edit',
  templateUrl: './jogo-edit.component.html',
  styleUrls: ['./jogo-edit.component.css']
})
export class JogoEditComponent implements OnInit{

  id_cat: String = ""
  opcoes: Categoria[] = [];
  opcaoSelecionada: string = '';

  constructor(
    private service: JogoService, 
    private route: ActivatedRoute, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!
    this.jogo.id = this.route.snapshot.paramMap.get("id")!

    this.carregarCategorias();
    this.findById();

  }

  cancel(): void{
    this.router.navigate([`jogos`]);
  }

  findById(): void {
    this.service.findById(this.jogo.id!).subscribe((resposta) => {
      this.jogo = resposta
      //console.log(this.jogo);
    })
  }

  edit(): void{
    this.service.update(this.jogo).subscribe((resposta) => {
      this.router.navigate([`jogos`]);
      this.service.mensagem('Jogo atualizado com sucesso!')
    }, err => {
      this.router.navigate([`jogos/edit/${this.id_cat}`]);
      this.service.mensagem('Falha ao atualizar o Jogo!')
    })
  }

  carregarCategorias() {
    this.service.findAllCategorias().subscribe((categorias: Categoria[]) => {
      this.opcoes = categorias;
      //console.log(this.opcoes);
    });
  }

  jogo: Jogo = {
    id: "",
    nome: "",
    descricao: "",
    idcategoria: ""
  };
}
