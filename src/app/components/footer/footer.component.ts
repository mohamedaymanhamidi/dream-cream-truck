import { Component } from '@angular/core';

interface FooterLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  // Quick links
  quickLinks: FooterLink[] = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Menu', url: '/menu' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  // Services
  services: FooterLink[] = [
    { name: 'Festivals & Fairs', url: '/services' },
    { name: 'Events', url: '/services' },
    { name: 'School Functions', url: '/services' },
    { name: 'Birthday Parties', url: '/services' }
  ];

  // Contact links
  contacts: FooterLink[] = [
    { name: '(571) 276-7756', url: 'tel:5551234567' },
    { name: 'dreamcreamtogo01@gmail.com', url: 'mailto:dreamcreamtogo01@gmail.com' },
    { name: 'Find Our Truck: 15676 Avocet Loop, Woodbridge, Va 22191', url: '/locations' }
  ];

  // Social links
  socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1HhUkfRHwR/?mibextid=wwXIfr' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/dream_creamtruck?igsh=aWk2eGNua2lvdDVv' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/dream-cream-truck-67a5493b8/' },
    // { icon: 'fab fa-tiktok', url: 'https://www.instagram.com/dream_creamtruck?igsh=aWk2eGNua2lvdDVv' },
    // { icon: 'fab fa-youtube', url: 'https://www.instagram.com/dream_creamtruck?igsh=aWk2eGNua2lvdDVv' }
  ];
}