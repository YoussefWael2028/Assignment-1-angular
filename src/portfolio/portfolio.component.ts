import { Component } from '@angular/core';
import { StarbannerComponent } from '../starbanner/starbanner.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarbannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
