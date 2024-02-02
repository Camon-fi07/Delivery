import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from 'shared/UI/text/text.component';
import { FieldComponent } from 'components/field/field.component';
import { ButtonComponent } from 'shared/UI/button/button.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ReactiveFormsModule, TextComponent, FieldComponent, ButtonComponent],
  exports: [ProfileComponent],
})
export class ProfileModule {}
