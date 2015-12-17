import {Component, OnInit} from 'angular2/core';
import {Hero, HeroService} from './hero.service';
import {Router, RouteParams} from 'angular2/router'

@Component({
  template:`
  <h1>Hero Detail</h1>
  <div *ngIf="hero">
    <p>{{hero.name}}</p>
  </div>
  <button (click)='goBack()'>Go Back</button>
    `
})

export class HeroDetailComponent implements OnInit{ 
  public hero: Hero;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _heroService: HeroService
  ){}

  ngOnInit(){
    let id = this._routeParams.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    this._router.navigate(['Heroes', { id: this._routeParams.get('id') }]);
  } 
}
