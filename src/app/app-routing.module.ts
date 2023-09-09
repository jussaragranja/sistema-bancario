import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './components/listagem-clientes/listagem-clientes.component';
import { CadastroClientesComponent } from './components/cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
  {
    path:"clientes",
    component: ListagemClientesComponent,
    children: [
      {
        path: "listagem",
        component: ListagemClientesComponent
      },
      {
        path: "cadastro",
        component: CadastroClientesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
