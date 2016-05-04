import {Component} from 'angular2/core'

@Component({
<<<<<<< HEAD
    selector: 'favorite',
    template:
    `
        <h2>Favorite Component</h2>
        <i
            class="glyphicon glyphicon-heart"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
        </i>

    `
})
export class FavoriteComponent {
=======
  selector: 'favorite',
  template: `
    <i
       class="glyphicon"
       [class.glyphicon-star-empty]="!isFavorite"
       [class.glyphicon-star]="isFavorite"
       (click)="onClick()">
     <i/>
  `
})
export class FavoriteComponent{
>>>>>>> 6ab130d37d86202af93ab07f507b048a91917655
    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}
