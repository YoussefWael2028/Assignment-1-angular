import { Component } from '@angular/core';
import { StarbannerComponent } from '../starbanner/starbanner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarbannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isWhite: boolean = true;
}
