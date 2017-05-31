
import { AbstractControl } from '@angular/forms';

export function valueMustContainsWill(c: AbstractControl) {
  if(c.value.indexOf('Will') === -1) {
    return {
      'must-contains-will': {
        error_code: 1,
        error_msg: '字串中必須包含 Will 字樣'
      }
    };
  } else {
    return null;
  }
}
