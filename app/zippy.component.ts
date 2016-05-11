import {Component} from 'angular2/core';


@Component({
    selector: 'bs-panel',
    template:
        `
        <div class="panel-group">
            <div class="panel panel-default">
                <div class="panel-heading" (click)="onClick1()">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion">
                      Collapsible Group Item #1
                    </a>
                    <i class="glyphicon  pull-right"
                    [class.glyphicon-chevron-down]="isHidden1"
                    [class.glyphicon-chevron-up]="!isHidden1"></i>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div [hidden]="isHidden1" class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>


            <div class="panel panel-default">
                <div class="panel-heading" (click)="onClick2()">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion">
                      Collapsible Group Item #1
                    </a>
                    <i class="glyphicon  pull-right"
                    [class.glyphicon-chevron-down]="isHidden2"
                    [class.glyphicon-chevron-up]="!isHidden2"></i>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div [hidden]="isHidden2" class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>

        </div>

        `,
    styles: [
        `
            .panel {
                width: 900px;
            }
            .panel-heading {
                cursor: pointer;
            }

        `

    ]
})
export class ZippyComponent {
    isHidden1 = true;
    isHidden2 = true;

    onClick1() {
        this.isHidden1 = !this.isHidden1;
    }

    onClick2() {
        this.isHidden2 = !this.isHidden2;
    }
}
