import {Component} from 'angular2/core'
import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template:
    `
    <ul *ngFor="#tweet of tweets">
    <div class="media">
        <div class="media-left">
            <a href="#">
              <img class="media-object" src="{{ tweet.imageUrl }}">
            </a>
        </div>

        <div class="media-body">
        <div class="tweet-author">
            <strong>{{ tweet.author }}</strong>
            {{ tweet.handle }}
        </div>

        {{ tweet.body }}
        <div class="like-componnent">
            <like [totalLikes]=" tweet.totalLikes " [isLiked]=" tweet.iLike "></like>
        </div>
        </div>
    </div>
    </ul>
    `,
    styles: [
        `
        .media {
            padding-top: 40px;
            padding-left: 40px;
            align: center;
        }
        .tweet-author{
            font-size: 20px;
        }
        `
    ],
    directives: [LikeComponent],
    providers: [TweetService]

})
export class TweetComponent {
    totalLikes = 0;
    isLiked = false;
    tweets;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

}
