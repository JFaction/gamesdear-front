import { Component } from '@angular/core';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {

  jogos: Jogo[] = []
  displayedColumns: string[] = ['id','nome','descricao', 'acoes'];

  constructor(private service: JogoService, private router: Router){ }

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.jogos = resposta;
    })
  }

  delete(id: String){
    this.service.delete(id).subscribe(() => {
      this.service.mensagem("Jogo excluido com sucesso!")
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
