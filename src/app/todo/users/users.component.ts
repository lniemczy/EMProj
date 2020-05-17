import { Component, OnInit } from '@angular/core';
import {Todo} from '../list-todo/Todo';
import {User} from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: User[] = [
    {id: 1, firstName: 'L', lastName: 'N', department: 'Production', active: true}
  ];
}
