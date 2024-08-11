import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
  @ViewChild('overlay', { static: false }) overlay!: ElementRef;

  show(e: HTMLImageElement) {
    this.overlay.nativeElement.classList.remove('d-none');
    this.overlay.nativeElement.innerHTML = `
    <img src="${e.src}" class="rounded-3 w-50" alt="">
    `;
  }
  hide(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.overlay.nativeElement.classList.add('d-none');
    }
  }
}
