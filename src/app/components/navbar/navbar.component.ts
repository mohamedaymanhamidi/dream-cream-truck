import { AfterViewInit, Component } from '@angular/core';

interface NavLink {
  name: string;
  url: string;
  isButton?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor() {}

  // Controls mobile menu
  menuOpen: boolean = false;

  // Logo info
  logo = {
    src: 'assets/dcl.png',
    alt: 'Dream Cream',
    text: 'DreamCream'
  };

  // Navigation links
  navLinks: NavLink[] = [
    { name: 'Home', url: '/' },
    { name: 'Menu', url: '/menu' },
    { name: 'Service', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'View Menu', url: '/menu', isButton: true },
  ];

  // Toggle mobile menu
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngAfterViewInit(): void {
    this.createSprinkles();
  }

  // Animated sprinkles
  createSprinkles(): void {
    const container = document.getElementById('sprinkles');
    if (!container) return;

    const colors: string[] = [
      '#F8A4C9',
      '#FF6B9D',
      '#F5B041',
      '#9B59B6',
      '#A8E6CF',
      '#FFF8F0'
    ];

    for (let i = 0; i < 50; i++) {
      const sprinkle: HTMLDivElement = document.createElement('div');
      sprinkle.className = 'sprinkle';
      sprinkle.style.left = Math.random() * 100 + '%';
      sprinkle.style.animationDuration = Math.random() * 3 + 2 + 's';
      sprinkle.style.animationDelay = Math.random() * 5 + 's';
      sprinkle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      container.appendChild(sprinkle);
    }
  }

   // Optional: scroll to top on link click
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}