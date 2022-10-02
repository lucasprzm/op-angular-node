import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TamanhosListaDataSource, TamanhosListaItem } from './tamanhos-lista-datasource';

@Component({
  selector: 'app-tamanhos-lista',
  templateUrl: './tamanhos-lista.component.html',
  styleUrls: ['./tamanhos-lista.component.css']
})
export class TamanhosListaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TamanhosListaItem>;
  dataSource: TamanhosListaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'acoes'];


  constructor() {
    this.dataSource = new TamanhosListaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
