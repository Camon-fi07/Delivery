import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryCalculationComponent } from './delivery-calculation.component';
import { SizeDropdownComponent } from './components/size-dropdown/size-dropdown.component';
import { DropdownComponent } from 'shared/UI/dropdown/dropdown.component';
import { TabsComponent } from 'shared/UI/tabs/tabs.component';
import { ControlsComponent } from 'shared/UI/controls/controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'components/field/field.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DeliveryCalculationComponent, SizeDropdownComponent],
  imports: [
    CommonModule,
    DropdownComponent,
    TabsComponent,
    ControlsComponent,
    ReactiveFormsModule,
    FieldComponent,
    HttpClientModule,
  ],
  exports: [DeliveryCalculationComponent, HttpClientModule],
})
export class DeliveryCalculationModule {}
