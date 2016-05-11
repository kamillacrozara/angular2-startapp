import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template:
    `
        <zippy title="This is my zippy component 1">
            content of zippy component 1
        </zippy>
        <zippy title="This is my zippy component 2">
            content of zippy component 2
        </zippy>

        `,
    directives: [ZippyComponent, LikeComponent]
})
export class AppComponent {
}
