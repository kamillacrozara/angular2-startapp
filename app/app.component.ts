import {Component} from 'angular2/core';
<<<<<<< HEAD
=======
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
>>>>>>> 6ab130d37d86202af93ab07f507b048a91917655
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
<<<<<<< HEAD
    template:
    `
        <h1>My First Angular 2 App</h1>
        <favorite></favorite>

    `,
    directives: [FavoriteComponent]
=======
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
>>>>>>> 6ab130d37d86202af93ab07f507b048a91917655
})
export class AppComponent { }
