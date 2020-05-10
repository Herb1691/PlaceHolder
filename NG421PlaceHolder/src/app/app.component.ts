import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from './interfaces/itodo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NG421PlaceHolder';
  @ViewChild(MatSort)sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<ITodo>(await this.todoService.get());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filterKeyUp( value: string ) {
    this.dataSource.filter = value;
  }

  filterById( data: any, filter: string ) {
    return data.id === +filter;
  }

  filterByUserId( data: any, filter: string ) {
    return data.userId === +filter;
  }

  groupChange( event: MatButtonToggleChange ) {
    switch ( event.value ) {
      case 'id':
        this.dataSource.filterPredicate = this.filterById;
        break;
      case 'userId':
        this.dataSource.filterPredicate = this.filterByUserId;
        break;
    }
  }
}
