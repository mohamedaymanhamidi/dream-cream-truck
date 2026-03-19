import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutParagraphs = [
    "Back in 2018, founder Sarah Miller had a simple dream: to bring premium, artisanal ice cream to neighborhoods across the city in the most fun way possible - through a vintage ice cream truck!",
    "What started as a single truck and three signature flavors has grown into a fleet of five beautifully restored ice cream trucks, serving over 500 events per year and bringing smiles to thousands of faces.",
    "Every scoop we serve is crafted with love, using locally sourced ingredients and time-honored recipes. We believe that ice cream isn't just a treat - it's a way to create lasting memories with the people you love."
  ];

  timeline = [
    { year: 2018, title: "The Beginning", desc: "First truck hits the road with 3 signature flavors" },
    { year: 2020, title: "Expanding", desc: "Fleet grows to 3 trucks, 15+ flavors added" },
    { year: 2023, title: "Going Big", desc: "500+ events served, catering launched" },
    { year: 2026, title: "Dream Big", desc: "5 trucks strong, city-wide coverage" }
  ];

  team = [
    { emoji: '👨‍🍳', name: 'Oussama BENKIRANE', position: 'Founder & CEO', desc: 'Ice cream visionary with a passion for bringing joy to communities' },
    { emoji: '👨‍🍳', name: 'Adeel RIAZ', position: 'Head Churner', desc: 'Master ice cream maker with 15 years of experience' },
    { emoji: '👩‍💼', name: 'Sahar ISMAIL', position: 'Cashie', desc: 'Makes sure every event is perfectly sweet' }
  ];

  values = [
    { icon: 'fas fa-heart', title: 'Made with Love', desc: 'Every scoop is crafted with care and attention to detail' },
    { icon: 'fas fa-leaf', title: 'Fresh & Local', desc: 'We source ingredients from local farms and suppliers' },
    { icon: 'fas fa-smile', title: 'Spread Joy', desc: 'Our mission is to create happy memories, one scoop at a time' },
    { icon: 'fas fa-users', title: 'Community First', desc: 'We give back to the communities that support us' }
  ];
}