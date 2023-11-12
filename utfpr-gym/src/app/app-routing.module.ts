import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent} from 'src/app/adicionar/adicionar.component';

const routes: Routes = [
  {
    path: 'adicionar',
    component: AdicionarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
