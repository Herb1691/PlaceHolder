import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NG421PlaceHolder';

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<ITodo>(await this.todoService.get());
  }

  filterKeyUp( value: string ) {
    this.dataSource.filter = value;
  }
}
