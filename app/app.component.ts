import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroListComponent} from './hero-list.component';
import {DashboardComponent} from './dashboard.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  styles: [`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}

      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease;  }

      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}

      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }

      .selected { background-color: #EEE; color: #369;  }
  `]
})

@RouteConfig([
  { path:'/', redirectTo: ['Heroes']},
  { path: '/heroes',    name: "Heroes",    component: HeroListComponent, useAsDefault: true},
  { path: '/dashboard', name: "Dashboard", component: DashboardComponent }
])

export class AppComponent { 
  public title = 'Tour of Heroes';
};
