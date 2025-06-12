import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastroComponent } from './cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteCadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCadastroRoutingModule {}
