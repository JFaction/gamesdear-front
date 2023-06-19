import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { JogoComponent } from './components/views/jogo/jogo-read/jogo.component';
import { JogoCreateComponent } from './components/views/jogo/jogo-create/jogo-create.component';
import { JogoEditComponent } from './components/views/jogo/jogo-edit/jogo-edit.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaEditComponent } from './components/views/categoria/categoria-edit/categoria-edit.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jogos',
    component: JogoComponent
  },
  {
    path: 'jogos/create',
    component: JogoCreateComponent
  },
  {
    path: 'jogos/edit/:id',
    component: JogoEditComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/edit/:id',
    component: CategoriaEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
