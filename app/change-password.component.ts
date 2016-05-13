import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {ChangePasswordValidators} from './ChangePasswordValidators'

@Component({
    selector: 'changepwd-form',
    templateUrl: 'app/change-password.component.html',
    styles: [
        `
        form {
            width: 900px;
            padding-left: 40px;
            padding-top: 40px;
        }

        `
    ]

})
export class ChangePasswordForm{
    form = ControlGroup;

    constructor(fb: FormBuilder){
        debugger;
        fb.group({
            currentPwd: ['', Validators.compose([
                    Validators.required,
                    ChangePasswordValidators.cannotContainSpace
                ])],
            newPwd: ['', Validators.required],
            confirmPwd: ['', Validators.required]
        })

    }

    changePwd(){
        console.log("On Submit");
    }

}
