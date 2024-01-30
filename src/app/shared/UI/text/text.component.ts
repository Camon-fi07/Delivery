import { Component, Input, OnInit } from '@angular/core';
import { TextTags, TextType } from './text.types';
import { CommonModule } from '@angular/common';
import { getTagByType } from './text.utils';

@Component({
  selector: 'text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent implements OnInit {
  @Input({ required: true }) textType!: TextType;
  @Input() textTag?: TextTags;

  ngOnInit(): void {
    if (!this.textTag) this.textTag = getTagByType(this.textType);
  }
}
