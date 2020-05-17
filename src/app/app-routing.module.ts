import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTodoComponent} from './todo/list-todo/list-todo.component';
import {AddTodoComponent} from './todo/add-todo/add-todo.component';
import {TodoComponent} from './todo/todo.component';
import {CommentsComponent} from './todo/comments/comments.component';
import {PriorityComponent} from './todo/priority/priority.component';
import {UsersComponent} from './todo/users/users.component';
import {EditUserComponent} from './todo/edit-user/edit-user.component';
import {AddUserComponent} from './todo/add-user/add-user.component';


const routes: Routes = [
  {path: '', component: TodoComponent, children: [
      {path: 'list', component: ListTodoComponent},
      {path: 'add', component: AddTodoComponent},
      {path: 'comments', component: CommentsComponent},
      {path: 'priority', component: PriorityComponent},
      {path: 'users', component: UsersComponent},
      {path: 'edit', component: EditUserComponent},
      {path: 'addUser', component: AddUserComponent}
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
