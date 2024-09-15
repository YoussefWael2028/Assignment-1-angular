import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-starbanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starbanner.component.html',
  styleUrl: './starbanner.component.css'
})
export class StarbannerComponent {
  @Input() isWhite: boolean = true;
}
