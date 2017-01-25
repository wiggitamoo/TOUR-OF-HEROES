import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by andre on 1/24/17.
 */

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}