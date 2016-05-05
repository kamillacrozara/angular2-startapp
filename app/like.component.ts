import {Component, EventEmitter, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template:
    `   <h2>Like component</h2>
    <i
        class="glyphicon glyphicon-heart"
        [class.highlighted]="isLiked"
        (click)="onClick()">
    </i>
    <span>{{ totalLikes }}</span>
    `,
    styles: [ `
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }

        `
    ]

})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() isLiked = false;

    onClick(){
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    }
}
