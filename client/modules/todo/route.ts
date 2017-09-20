import { Routes } from '@angular/router';
import { NotFound } from 'components/not-found';
import { TodoList } from './pages/todo-list';
import { TodoDetail } from './pages/todo-detail';
console.log(TodoList);
 
const appRoutes: Routes = [
  {
    path: 'todo/todoList',
    component: TodoList,
    pathMatch: 'full'
  },
  //  {
  //   path: '/todo/todoDetail',
  //   component: TodoDetail,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: NotFound }
];

export default appRoutes;