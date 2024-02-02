import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'components/field/field.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { ButtonComponent } from 'shared/UI/button/button.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, FieldComponent, TextComponent, ButtonComponent],
  providers: [HttpClient],
  exports: [AuthComponent],
})
export class AuthModule {}
