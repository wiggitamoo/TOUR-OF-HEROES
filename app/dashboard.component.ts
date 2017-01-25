/**
 * Created by andre on 1/2/17.
 */

import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    getHeroesd(): void {
        // this.heroService.getHeroes().then(
        this.heroService.getHeroesSlowly().then(
            (heroes) => {
                this.heroes = heroes
            }
        );
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(
                (heroes) => {
                    this.heroes = heroes.slice(1,5)
                }
            );
    }

    ngOnInit(): void {
        this.getHeroes()
    }
}