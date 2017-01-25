import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-hereos',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],

    providers: [HeroService]

})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    heroes: Hero[];
    selectedHero: Hero;

    getHeroes(): void {
        // this.heroService.getHeroes().then(
        this.heroService.getHeroesSlowly().then(
            (heroes) => {
                this.heroes = heroes
            }
        );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}