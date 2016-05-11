import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template:
        `
        <bs-panel>
            <div class="heading">
                This is the heading
            </div>
            <div class="body">
                This is the body
            </div>
        </bs-panel>
        
        `,
    directives: [ZippyComponent, LikeComponent]
})
export class AppComponent {
}
