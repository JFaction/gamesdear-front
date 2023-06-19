import { Component, OnInit } from '@angular/core';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';
import { Categoria } from '../../categoria/categoria.model';

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css']
})


export class JogoCreateComponent implements OnInit{

  jogo: Jogo = {
    nome: '',
    descricao: ''
  }

  opcoes: Categoria[] = [];
  opcaoSelecionada: string = '';

  constructor(private service: JogoService, private router: Router){}
  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias() {
    this.service.findAllCategorias().subscribe((categorias: Categoria[]) => {
      this.opcoes = categorias;
    });
  }



  create(): void{
    const id = this.opcaoSelecionada;
    this.service.create(this.jogo, id).subscribe((resposta) => {
      this.router.navigate(['jogos'])
      this.service.mensagem('Jogo criado com sucesso!');
    }, err => {
      this.router.navigate([`jogos/create`]);
      this.service.mensagem("Erro ao inserir novo Jogo.");
      });
    }
    
  

  cancel(): void{
    this.router.navigate(['jogos'])
  }

}
