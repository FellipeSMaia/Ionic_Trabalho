import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../telasTabs/inicio/inicio.module').then(
            (m) => m.InicioPageModule
          ),
      },
      {
        path: 'minha-conta',
        loadChildren: () =>
          import('../telasTabs/minha-conta/minha-conta.module').then(
            (m) => m.MinhaContaPageModule
          ),
      },
      {
        path: 'carrinho',
        loadChildren: () =>
          import('../telasTabs/carrinho/carrinho.module').then(
            (m) => m.CarrinhoPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
