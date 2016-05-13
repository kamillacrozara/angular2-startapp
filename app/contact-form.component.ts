import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styles: [
        `
        form {
            width: 900px;
            padding-left: 40px;
            padding-top: 40px;
        }
        .ng‐invalid.ng‐touched {
            border:	1px solid red;
        }
        `
    ]

})
export class ContactFormComponent {
    onSubmit(form){
        console.log('On Submit')
    }
}
