import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
