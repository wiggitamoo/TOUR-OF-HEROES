/**
 * Created by andre on 9/27/16.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./moc-heroes";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(
            resolve => setTimeout(resolve, 2000)
        ).then(
            () => this.getHeroes()
        )
    }
}