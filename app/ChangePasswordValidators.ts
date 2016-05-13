import {Control} from 'angular2/common';

export class ChangePasswordValidators {
    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace: true}

        return null;

    }

}
