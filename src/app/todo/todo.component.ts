import { Component, OnInit } from '@angular/core';
import {Todo} from './list-todo/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
}
