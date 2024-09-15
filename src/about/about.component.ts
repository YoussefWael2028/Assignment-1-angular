import { Component } from '@angular/core';
import { StarbannerComponent } from '../starbanner/starbanner.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarbannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
