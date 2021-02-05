import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadosUnidosComponent } from './components/estados-unidos/estados-unidos.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

//Rotas utilizadas no projeto
const routes: Routes = [
  {  path: '', component: HomeComponent, pathMatch: 'full'},//Página padrão
  {  path: 'estadosUnidos', component: EstadosUnidosComponent,},//Página que mostra apenas o Estados Unidos
  {  path: '**', component: NotFoundComponent}//Aparece quando é digitado o endereço errado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
