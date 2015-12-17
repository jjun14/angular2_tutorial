import {Component, OnInit} from 'angular2/core';
import {Hero, HeroService} from './hero.service';
import {Router, RouteParams} from 'angular2/router'

@Component({
  template:`
  <div *ngIf="hero">
    <h1>{{hero.name}} Detail</h1>
    <div>
      <div>
        <label>id: </label> {{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input type='text' 
          [(ngModel)]='hero.name'>
      </div>
    </div>
  </div>
  <button (click)='goBack()'>Go Back</button>
    `
})

export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _heroService: HeroService
  ){}

  ngOnInit(){
    if(!this.hero){
      let id = this._routeParams.get('id');
      this._heroService.getHero(id).then(hero => this.hero = hero);
    }
  }

  goBack() {
    this._router.navigate(['Heroes']);
  } 
}
