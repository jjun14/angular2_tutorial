System.register(['angular2/core', './hero.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, router_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_router, _routeParams, _heroService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._heroService = _heroService;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.hero) {
                        var id = this._routeParams.get('id');
                        this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
                    }
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this._router.navigate(['Heroes']);
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div *ngIf=\"hero\">\n    <h1>{{hero.name}} Detail</h1>\n    <div>\n      <div>\n        <label>id: </label> {{hero.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input type='text' \n          [(ngModel)]='hero.name'>\n      </div>\n    </div>\n  </div>\n  <button (click)='goBack()'>Go Back</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, hero_service_1.HeroService])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map