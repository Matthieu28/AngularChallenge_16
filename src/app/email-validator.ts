import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailegex = RegExp('wilder\\.school$');
    const valid = emailegex.test(control.value);

    const errors = {
        password: {
            rules: 'must contain "wilder.school" at the end'
        }
    };

    return !valid ? errors : null;
}