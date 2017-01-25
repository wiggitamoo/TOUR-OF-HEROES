/**
 * Created by andre on 1/2/17.
 */

import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
<h1>
    {{title}}
</h1>
<nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>
`,
    styles: [`
/* unvisited link */
a:link {
    color: cornflowerblue;
}

/* visited link */
a:visited {
    color: lightblue;
}

/* mouse over link */
a:hover {
    color: lightgreen;
}

/* selected link */
a:active {
    color: lightgrey;
}
`]
})

export class AppComponent {
    title = "Tour of Heroes";
}