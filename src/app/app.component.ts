import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ang-assignment1';
  scrolledToFooter: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const footer = document.getElementById('footer');
    if (footer) {
      const rect = footer.getBoundingClientRect();
      this.scrolledToFooter = rect.top <= window.innerHeight;
    }
  }
}
