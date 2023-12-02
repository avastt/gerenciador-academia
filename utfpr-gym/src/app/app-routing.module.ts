import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent} from 'src/app/adicionar/adicionar.component';
import { ListarComponent } from './listar/listar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { DeletarComponent } from './deletar/deletar.component';

const routes: Routes = [
  {
    path: 'adicionar',
    component: AdicionarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'alterar',
    component: AlterarComponent
  },
  {
    path: 'deletar',
    component: DeletarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
