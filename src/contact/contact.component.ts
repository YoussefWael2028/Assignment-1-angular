import { Component } from '@angular/core';
import { StarbannerComponent } from '../starbanner/starbanner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarbannerComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  isTyping: { [key: string]: boolean } = {};

  onInput(field: string, event: Event) {
    const input = event.target as HTMLInputElement;
    this.isTyping[field] = input.value !== '';
  }

  onBlur(field: string) {
    if (!this.isTyping[field]) {
      this.isTyping[field] = false;
    }
  }
}