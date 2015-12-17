import {Component, OnInit} from 'angular2/core';
import {Hero, HeroService} from './hero.service';
import {Router}            from 'angular2/router';

@Component({
  template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)='onSelect(hero)'>
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} is my hero</h2>
      <button (click)='showDetails(selectedHero)'>View Details</button>
    </div>
  `,
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

export class HeroListComponent { 
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
    private _router: Router,
    private _service: HeroService){ }

  ngOnInit(){
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }

  showDetails(hero: Hero){
    this._router.navigate(['HeroDetail', { id: hero.id }]);
  }
}
