import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './components/listagem-clientes/listagem-clientes.component';

const routes: Routes = [
  {
    path:"clientes",
    component: ListagemClientesComponent,
    children: [
      {
        path: "listagem",
        component: ListagemClientesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
