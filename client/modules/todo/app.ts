import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { RouterOutlet } from '@angular/router';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: '#app',
  template: `
    abcc
    <router-outlet></router-outlet>
    `,
   // directives: [ROUTER_DIRECTIVES]
})
export class App {

}
