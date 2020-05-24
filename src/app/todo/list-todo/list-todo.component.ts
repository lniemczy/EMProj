import { Component, OnInit } from '@angular/core';
import {Todo} from './Todo';
import {TaskServiceService} from '../../task-service.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  todos: Todo[] = [];

  getTodos(){
    this.taskService.getTodos().subscribe(todos => this.todos = todos);
  }

  closeTodo(id: number){
    this.taskService.closeTodo(id);
  }

}
