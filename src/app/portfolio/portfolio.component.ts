import { Component } from '@angular/core';
interface IProduct {
  ref: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  products: IProduct[] = [
    { ref: './assets/images/gallery1.png' },
    { ref: './assets/images/gallery2.png' },
    { ref: './assets/images/gallery3.png' },
    { ref: './assets/images/gallery1.png' },
    { ref: './assets/images/gallery2.png' },
    { ref: './assets/images/gallery3.png' },
  ];
}
