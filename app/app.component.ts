import {Component} from 'angular2/core';
import {ChangePasswordForm} from './change-password.component';

@Component({
    selector: 'my-app',
    template:
    `
        <changepwd-form></changepwd-form>

        `,
    directives: [ChangePasswordForm]
})
export class AppComponent {
}
