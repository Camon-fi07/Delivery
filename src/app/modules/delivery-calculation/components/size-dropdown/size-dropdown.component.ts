import { Component, Input, OnInit } from '@angular/core';
import { SpecialPackage } from 'modules/delivery-calculation/types/Package';

@Component({
  selector: 'size-dropdown',
  templateUrl: './size-dropdown.component.html',
  styleUrl: './size-dropdown.component.scss',
})
export class SizeDropdownComponent implements OnInit {
  @Input({ required: true }) packages!: SpecialPackage[];
  isExactlySize = false;
  tabsVariants = ['Примерные', 'Точные'];
  dropDownVariants!: string[];
  chosenVariant = '';

  toggleIsExactlySize() {
    this.isExactlySize = !this.isExactlySize;
  }

  handleChoseVariant(index: number) {
    this.chosenVariant = this.dropDownVariants[index];
  }

  ngOnInit() {
    this.dropDownVariants = this.packages.map((item) => `${item.name} ${length}x${item.width}x${item.height} см`);
    this.chosenVariant = this.dropDownVariants[0];
  }
}
