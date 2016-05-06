import {Component,Input, Output, EventEmitter} from 'angular2/core'


@Component({
    selector: 'vote',
    template:
    `
        <h2>Vote component</h2>
        <div class="vote">
        <i class="glyphicon glyphicon-chevron-up vote-button"
        [class.highlighted]="myVote == 1"
        (click)="onUpvote()"></i>
        <span>{{ voteCount }}</span>
        <i class="glyphicon glyphicon-chevron-down vote-button"
        [class.highlighted]="myVote == -1"
        (click)="onDownVote()"></i>
        </div>
    `,
    styles: [
        `
            .vote {
                width: 20px;
                text-align: center;
                font-weight: bold;
            }
            .vote-button {
                cursor: pointer;
            }
            .highlighted {
                color: orange;
            }

        `
    ]
})
export class VoteComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    onUpvote(){
        if (this.myVote == 1)
            return;

        if (this.myVote == 0) {
            this.voteCount += 1;
            this.myVote = 1;
        }
        if (this.myVote == -1) {
            this.voteCount += 1;
            this.myVote = 0;
        }
        this.vote.emit({newValue: this.myVote});
    }

    onDownVote(){
        if (this.myVote == -1)
            return;

        if (this.myVote == 0) {
            this.voteCount -= 1;
            this.myVote = -1;
        }
        if (this.myVote == 1) {
            this.voteCount -= 1;
            this.myVote = 0;
        }
        this.vote.emit({newValue: this.myVote});

    }
}
