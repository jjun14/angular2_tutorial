import {Component}         from 'angular2/core';
import {Hero, HeroService} from './hero.service';
import {Router}            from 'angular2/router';

@Component({
  template: `
    <h1>Top Heroes</h1>
    <div *ngIf="heroes">
      <div class='hero' *ngFor="#hero of heroes" (click)="showDetail(hero)">
        {{hero.name}}
      </div>
    </div>
  `,
  styles:[`
  .hero {
    display: inline-block;
    text-align: center;
    margin-right: 20px;
    height: 90px;
    width: 90px;
    background-color: #227AB5;
    color: white;
  }
  `]
})

export class DashboardComponent {
  public heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ){}

  ngOnInit(){
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
  }

  showDetail(hero){
    this._router.navigate(['HeroDetail', { 'id': hero.id }]);
  }
}
