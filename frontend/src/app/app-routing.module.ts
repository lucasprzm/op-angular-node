import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TamanhosFormComponent } from './tamanhos/tamanhos-form/tamanhos-form.component';
import { TamanhosComponent } from './tamanhos/tamanhos.component';

const routes: Routes = [
{
  path: 'produtos',
  component: ProdutosComponent
},
{
  path: 'produtos/cadastrar',
  component: ProdutosFormComponent
},
{
  path: 'categorias',
  component: CategoriasComponent
},
{
  path: 'categorias/cadastrar',
  component: CategoriasFormComponent
},
{
  path: 'tamanhos',
  component: TamanhosComponent
},
{
  path: 'tamanhos/cadastrar',
  component: TamanhosFormComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
