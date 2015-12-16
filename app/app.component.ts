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
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path:'/', redirectTo: ['Heroes']},
  { path: '/heroes',    name: "Heroes",    component: HeroListComponent, useAsDefault: true},
  { path: '/dashboard', name: "Dashboard", component: DashboardComponent }
])

export class AppComponent { 
  public title = 'Tour of Heroes';
};
