import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextType } from 'shared/UI/text/text.types';
import { TextComponent } from 'shared/UI/text/text.component';

@Component({
  selector: 'controls',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent implements OnInit {
  @Input({ required: true }) values!: string[];
  @Output() emitChosenIndex = new EventEmitter<number>();
  @Input() isMultiSelect = false;
  @Input() withIcon = false;
  @Input() isDisabled = false;

  chosenIndexes = [0];
  textValueType = TextType.VALUE;

  handleChose(index: number) {
    if (!this.isDisabled) this.emitChosenIndex.emit(index);

    if (!this.isMultiSelect) {
      this.chosenIndexes[0] = index;
      return;
    }

    if (this.chosenIndexes.includes(index)) {
      this.chosenIndexes = this.chosenIndexes.filter((value) => value !== index);
    } else this.chosenIndexes.push(index);
  }

  ngOnInit(): void {
    if (this.isMultiSelect) this.withIcon = true;
  }
}
