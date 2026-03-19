import { Component, AfterViewInit } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface MenuItem {
  emoji: string;
  name: string;
  description: string;
}

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() {}

  // Features Bar
  features: Feature[] = [
    { icon: 'fas fa-truck', title: 'We Come to You', description: 'Mobile ice cream truck service' },
    { icon: 'fas fa-star', title: 'Premium Quality', description: 'Artisan ice cream flavors' },
    { icon: 'fas fa-heart', title: 'Made with Love', description: 'Fresh ingredients daily' },
    { icon: 'fas fa-smile', title: 'Happy Customers', description: '500+ events served' }
  ];

  // Signature Flavors (same structure as menu cones)
  cones: MenuItem[] = [
    // {
    //   emoji: '🍓',
    //   name: 'Strawberry Dream',
    //   description: 'Fresh strawberry ice cream served in a crunchy cone'
    // },
    {
      emoji: '🍫',
      name: 'Vanilla & Chocolate Ice Cream Cones',
      description: 'Choclate & Cherry Dip, Rainbow Sprinklers...'
    },
    // {
    //   emoji: '🍦',
    //   name: 'Vanilla Cloud',
    //   description: 'Smooth Madagascar vanilla bean ice cream'
    // },
    // {
    //   emoji: '🍪',
    //   name: 'Cookies & Cream',
    //   description: 'Creamy vanilla with Oreo cookie chunks'
    // },
    // {
    //   emoji: '🍨',
    //   name: 'Caramel Delight',
    //   description: 'Sweet caramel swirl ice cream'
    // }
  ];

  ngAfterViewInit(): void {
    this.createSprinkles();
  }

  // Generate animated sprinkles
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



  galleryImages: GalleryImage[] = [

    {
      src: 'assets/a.jpeg', // PUT IMAGE PATH HERE
      title: 'Birthday Celebration',
      description: 'A fun birthday party with our ice cream truck.'
    },

    {
      src: 'assets/b.jpeg',
      title: 'Wedding Dessert Truck',
      description: 'Serving sweet treats at a beautiful wedding.'
    },

    {
      src: 'assets/c.jpeg',
      title: 'Corporate Event',
      description: 'Refreshing ice cream for a company celebration.'
    },

    {
      src: 'assets/d.jpeg',
      title: 'Festival Day',
      description: 'A busy festival full of happy customers.'
    },

    {
      src: 'assets/e.jpeg',
      title: 'Kids Party',
      description: 'Kids enjoying their favorite ice cream flavors.'
    },

    // {
    //   src: 'assets/gallery/img6.jpg',
    //   title: 'Dream Cream Truck',
    //   description: 'Our colorful truck bringing smiles everywhere.'
    // }

  ];

}