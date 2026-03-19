import { Component } from '@angular/core';

interface Service {
  id: string;
  emoji: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  price: string;
  btnText: string;
  btnLink: string;
}

interface ProcessStep {
  number: number;
  title: string;
  desc: string;
}

interface Testimonial {
  stars: number;
  text: string;
  avatar: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: Service[] = [
    {
      id: 'festivals',
      emoji: '🎪',
      icon: 'fas fa-ticket-alt',
      title: 'Festivals & Fairs',
      desc: 'Bring the crowd to your event! Our eye-catching truck and efficient service keep festival-goers happy and coming back for more.',
      features: [
        'High-volume capacity',
        'Quick-serve system',
      ],
      price: 'Custom Pricing',
      btnText: 'Inquire',
      btnLink: '/contact'
    },
    {
      id: 'corporate',
      emoji: '🏢',
      icon: 'fas fa-briefcase',
      title: 'Events',
      desc: 'Make your special day unforgettable with our Dream Cream truck! We bring artisanal ice cream, fun flavors, and delightful treats directly to your event.',
      features: [
        'Flexible scheduling',
        'Serving large groups efficiently'
      ],
      price: 'Starting at $499',
      btnText: 'Book Now',
      btnLink: '/book'
    },
    {
      id: 'schools',
      emoji: '🎓',
      icon: 'fas fa-graduation-cap',
      title: 'School Functions',
      desc: 'From field days to graduation parties, we make school events extra special. Safe, fun, and memorable for students of all ages.',
      features: [
        'Allergen-friendly options',
        'Nut-free flavors available',
        'Background-checked staff'
      ],
      price: 'Starting at $399',
      btnText: 'Book Now',
      btnLink: '/book'
    },
    {
      id: 'birthdays',
      emoji: '🎂',
      icon: 'fas fa-birthday-cake',
      title: 'Birthday Parties',
      desc: 'Make your little one\'s special day unforgettable! Our colorful truck and delicious treats bring pure joy to birthday celebrations of all ages.',
      features: [
        'Custom flavor selection',
        'Birthday-themed decorations',
        'Special birthday sundae for the guest of honor'
      ],
      price: 'Starting at $299',
      btnText: 'Book Now',
      btnLink: '/book'
    },
    // {
    //   id: 'weddings',
    //   emoji: '💍',
    //   icon: 'fas fa-heart',
    //   title: 'Weddings',
    //   desc: 'Add a sweet touch to your special day! Our elegant service and premium flavors create the perfect dessert experience for your wedding reception.',
    //   features: [
    //     'Elegant presentation & decor',
    //     'Custom flavor pairings',
    //     'Late-night reception service',
    //     'Photo opportunities with truck'
    //   ],
    //   price: 'Starting at $599',
    //   btnText: 'Book Now',
    //   btnLink: '/book'
    // },
    
    
    
  ];

  processSteps: ProcessStep[] = [
    { number: 1, title: 'Choose Your Service', desc: 'Select the perfect package for your event type and size' },
    { number: 2, title: 'Pick Your Flavors', desc: 'Customize your menu from our artisan flavor selection' },
    { number: 3, title: 'Confirm Details', desc: 'We\'ll finalize timing, location, and special requests' },
    { number: 4, title: 'Enjoy the Party!', desc: 'We arrive, set up, and serve smiles all around' }
  ];

  testimonials: Testimonial[] = [
    {
      stars: 5,
      text: '"Dream Cream made my daughter\'s 8th birthday absolutely magical! The kids are still talking about it weeks later. Worth every penny!"',
      avatar: 'SM',
      name: 'Sarah Mitchell',
      role: 'Birthday Party'
    },
    {
      stars: 5,
      text: '"We had Dream Cream at our company picnic and they were fantastic! Professional, efficient, and the ice cream was incredible."',
      avatar: 'JR',
      name: 'James Rodriguez',
      role: 'Corporate Event'
    },
    {
      stars: 5,
      text: '"The hit of our wedding reception! Guests loved the late-night ice cream surprise. The lavender honey flavor is to die for!"',
      avatar: 'EK',
      name: 'Emily & Kevin',
      role: 'Wedding Reception'
    }
  ];
}