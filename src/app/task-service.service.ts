import { Injectable } from '@angular/core';
import {Todo} from './todo/list-todo/Todo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  private todos: Todo[] = [
    {id: 1, responsible: 'L', description: 'blal', notes: 'notes', active: true},
    {id: 2, responsible: 'R', description: 'aaadddddddd ddddddddddddd', notes: 'notes2', active: false}
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  closeTodo(id: number) {
    const taskIndex = this.todos.findIndex(p => p.id === id);    // p służy di iteracji
    this.todos.splice(taskIndex, 1);
  }
}
