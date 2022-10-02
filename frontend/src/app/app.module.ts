import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { TamanhosComponent } from './tamanhos/tamanhos.component';
import { TamanhosListaComponent } from './tamanhos/tamanhos-lista/tamanhos-lista.component';
import { TamanhosFormComponent } from './tamanhos/tamanhos-form/tamanhos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProdutosComponent,
    ProdutosListaComponent,
    ProdutosFormComponent,
    CategoriasComponent,
    CategoriasListaComponent,
    CategoriasFormComponent,
    TamanhosComponent,
    TamanhosListaComponent,
    TamanhosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
