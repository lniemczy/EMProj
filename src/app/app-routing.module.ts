import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTodoComponent} from './todo/list-todo/list-todo.component';
import {AddTodoComponent} from './todo/add-todo/add-todo.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {path: '', component: TodoComponent, children: [
      {path: 'list', component: ListTodoComponent},
          {path: 'add', component: AddTodoComponent}
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
