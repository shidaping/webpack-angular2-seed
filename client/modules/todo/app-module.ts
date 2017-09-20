import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { TodoList } from './pages/todo-list';
import { TodoDetail } from './pages/todo-detail';
import { NotFound } from 'components/not-found';


import { App }  from './app';
import routes from './route';

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    App,
    TodoDetail,
    TodoList,
    NotFound,
  ],
  bootstrap: [ App ]
})
export class AppModule { }
