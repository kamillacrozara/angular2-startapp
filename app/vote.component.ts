import {Component} from 'angular2/core'


@Component({
    selector: 'vote',
    template:
    `
        <h2>Vote component</h2>
        <div class="vote">
        <i class="glyphicon glyphicon-chevron-up"
        [class.highlighted]="isUpVoted"
        (click)="onUpvote()"></i>
        <span>{{ totalVotes }}</span>
        <i class="glyphicon glyphicon-chevron-down"
        [class.highlighted]="isDownVoted"
        (click)="onDownVote()"></i>
        </div>
    `,
    styles: [
        `
            .vote {
                width: 20px;
            }
            .glyphicon-chevron-up {
                cursor: pointer;
            }
            .glyphicon-chevron-down {
                cursor: pointer;
            }
            .highlighted {
                color: orange;
            }

        `
    ]
})
export class VoteComponent {
    totalVotes = 0;
    isUpVoted = false;
    isDownVoted = false;

    onUpvote(){
        this.isUpVoted = true;
        this.isDownVoted = false;
        this.totalVotes += 1;
    }

    onDownVote(){
        this.isDownVoted = true;
        this.isUpVoted = false;
        this.totalVotes -= 1;
    }
}
