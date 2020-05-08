import { Component, OnInit } from '@angular/core';
import {Todo} from './Todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todos: Todo[] = [
    {id: 1, responsible: 'L', description: 'blal', notes: 'notes', active: true},
    {id: 2, responsible: 'R', description: 'aaadddddddd ddddddddddddd', notes: 'notes2', active: false}
  ];

}
