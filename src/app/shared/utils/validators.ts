import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PHONE_REG } from 'shared/constants/regularExpressions';

export const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const errors: ValidationErrors = {};

  if (!control.value) errors['required'] = 'Поле является обязательным';
  else if (!PHONE_REG.test(control.value)) errors['format'] = 'Неправильный формат';

  return errors;
};

export const packageValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const errors: ValidationErrors = {};

  if (!control.value) {
    errors['required'] = 'Ожидалось значение';
    return errors;
  }

  const { height, weight, length, width } = control.value;

  if (!height || parseInt(height) < 1) errors['height'] = 'Высота должна быть больше нуля';
  if (!weight || parseInt(weight) < 1) errors['weight'] = 'Вес должен быть больше нуля';
  if (!length || parseInt(length) < 1) errors['length'] = 'Длина должна быть больше нуля';
  if (!width || parseInt(width) < 1) errors['width'] = 'Ширина должна быть больше нуля';

  return Object.keys(errors).length ? errors : null;
};
