import { translateSpecialPackageToPackage } from 'modules/delivery-calculation/utils/mappers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Package, SpecialPackage } from 'shared/types/Package';

@Component({
  selector: 'size-dropdown',
  templateUrl: './size-dropdown.component.html',
  styleUrl: './size-dropdown.component.scss',
})
export class SizeDropdownComponent implements OnInit {
  @Input({ required: true }) packages!: SpecialPackage[];
  @Output() setPackage = new EventEmitter<Package>();
  formGroup!: FormGroup;
  isExactlySize = false;
  tabsVariants = ['Примерные', 'Точные'];
  dropDownVariants!: string[];
  chosenVariant = '';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      weight: new FormControl(null),
      length: new FormControl(null),
      width: new FormControl(null),
      height: new FormControl(null),
    });

    this.formGroup.valueChanges.subscribe((res) => {
      this.setPackage.emit(res);
      this.chosenVariant = `${res.length || 0}x${res.width || 0}x${res.height || 0} см`;
    });
  }

  toggleIsExactlySize() {
    this.isExactlySize = !this.isExactlySize;
  }

  handleChoseVariant(index: number) {
    this.setPackage.emit(translateSpecialPackageToPackage(this.packages[index]));
    this.chosenVariant = this.dropDownVariants[index];
  }

  ngOnInit() {
    this.dropDownVariants = this.packages.map((item) => `${item.name} ${item.length}x${item.width}x${item.height} см`);
    this.chosenVariant = this.dropDownVariants[0];
    this.setPackage.emit(translateSpecialPackageToPackage(this.packages[0]));
  }
}
