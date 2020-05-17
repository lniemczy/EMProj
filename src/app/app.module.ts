import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { CommentsComponent } from './todo/comments/comments.component';
import { PriorityComponent } from './todo/priority/priority.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTodoComponent,
    TodoComponent,
    CommentsComponent,
    PriorityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
