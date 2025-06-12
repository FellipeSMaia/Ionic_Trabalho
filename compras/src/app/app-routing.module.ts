import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'produto/:codigo',
    loadChildren: () =>
      import('./produto/produto.module').then((m) => m.ProdutoPageModule),
  },
  {
    path: 'minha-conta',
    loadChildren: () =>
      import('./telasTabs/minha-conta/minha-conta.module').then(
        (m) => m.MinhaContaPageModule
      ),
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./cadastro/cadastro.module').then((m) => m.ClienteCadastroModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./telasTabs/carrinho/carrinho.module').then(
        (m) => m.CarrinhoPageModule
      ),
  },
  {
    path: 'resultado',
    loadChildren: () =>
      import('./resultado/resultado.module').then((m) => m.ResultadoPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
