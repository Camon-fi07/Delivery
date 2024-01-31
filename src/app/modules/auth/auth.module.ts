import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'components/field/field.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { ButtonComponent } from 'shared/UI/button/button.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, FieldComponent, TextComponent, ButtonComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
