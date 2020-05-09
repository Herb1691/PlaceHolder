import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  async get(): Promise<ITodo[]> {
    return await this.httpClient.get<ITodo[]>(this.URL).toPromise();
  }
}
