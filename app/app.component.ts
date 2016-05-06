import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <like [totalLikes]="tweet.totalLikes" [isLiked]="tweet.isLiked"></like>
        <vote [voteCount]="post.totalVotes"></vote>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent {
    tweet = {
        totalLikes: 10,
        isLiked: false
    }

    post = {
        totalVotes: 10,
    }
}
