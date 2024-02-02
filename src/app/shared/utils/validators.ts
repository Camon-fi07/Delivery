import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ADDRESS_REG, NAME_REG, PHONE_REG } from 'shared/constants/regularExpressions';

export const requireValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  return !control.value ? { required: 'Поле является обязательным' } : null;
};

export const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  return !PHONE_REG.test(control.value) ? { format: 'Неправильный формат' } : null;
};

export const packageValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  const errors: ValidationErrors = {};

  const { height, weight, length, width } = control.value;

  if (!height || parseInt(height) < 1) errors['height'] = 'Высота должна быть больше нуля';
  if (!weight || parseInt(weight) < 1) errors['weight'] = 'Вес должен быть больше нуля';
  if (!length || parseInt(length) < 1) errors['length'] = 'Длина должна быть больше нуля';
  if (!width || parseInt(width) < 1) errors['width'] = 'Ширина должна быть больше нуля';

  return Object.keys(errors).length ? errors : null;
};

export const nameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  const errors: ValidationErrors = {};

  if (!NAME_REG.test(control.value)) errors['format'] = 'Неверный формат';
  if (control.value.length > 60) errors['length'] = 'Длина имени не может превышать 60 символов';

  return Object.keys(errors).length ? errors : null;
};

export const addressValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  const errors: ValidationErrors = {};

  if (!ADDRESS_REG.test(control?.value)) errors['format'] = 'Неверный формат';
  if (control?.value?.length > 100) errors['length'] = 'Длина адреса не может превышать 100 символов';

  return Object.keys(errors).length ? errors : null;
};

export const commentValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  return control.value.lengt > 300 ? { length: 'Длина комментария не может превышать 100 символов' } : null;
};
