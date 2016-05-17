import {Control, ControlGroup} from 'angular2/common';

export class ChangePasswordValidators {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace: true};

        return null;

    }

    static passwordMustMatch(group: ControlGroup) {
        var newPwd = group.find('newPwd').value;
        var confirmPwd = group.find('confirmPwd').value;

        if (newPwd != confirmPwd)
            return {passwordMustMatch: true};

        return null;

    }

}
