import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PHONE_REG } from 'shared/constants/regularExpressions';

export const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const errors: ValidationErrors = {};

  if (!control.value) errors['required'] = 'Ожидалось значение';
  else if (!PHONE_REG.test(control.value)) errors['format'] = 'Неправильный формат';

  return errors;
};
