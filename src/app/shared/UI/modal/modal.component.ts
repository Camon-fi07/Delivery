import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() closeModal = new EventEmitter();

  handleModalClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.closeModal.emit();
  }
}
