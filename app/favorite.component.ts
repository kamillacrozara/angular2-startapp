import {Component} from 'angular2/core'

@Component({
    selector: 'favorite',
    template:
    `
        <h2>Favorite Component</h2>
        <i
            class="glyphicon glyphicon-star"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
        </i>

    `
})
export class FavoriteComponent{
    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}
