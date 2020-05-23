import { Component, OnInit } from '@angular/core';
/*import {Todo} from './/src/app/todo/list-todo/Todo';*/
import {User} from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users: User[] = [
    {id: 1, firstName: 'L', lastName: 'N', department: 'Production', active: true}
  ];

  ngOnInit(): void {
  }

  deactivateUser() {

  }
}
