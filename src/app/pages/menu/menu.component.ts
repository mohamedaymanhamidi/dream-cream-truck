import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  image?: string;
  emoji: string;
  price: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  activeSection: string = 'cones';

  cones: MenuItem[] = [
    { emoji: '🍦', name: 'Vanilla Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍫', name: 'Chocolate Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍦🍫', name: 'Swirl Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍫', name: 'Chocolate Dipped Cone' ,price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍒', name: 'Cherry Dipped Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍪', name: 'Oreo Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🥜', name: 'Peanut Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🌈', name: 'Rainbow Sprinkles Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍫', name: 'Chocolate Sprinkles Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🥣', name: 'Fruity Pebbles Cone',price: '$10.00',description: 'Creamy frozen slush drink' },
  ]
//     {
//       name: 'Wafl Bowls Cone',
//       emoji: '🧇',
//       price: '$8.00',
//       description: 'Includes toppings. Flavors: Vanilla, Chocolate, Vanilla & Chocolate Swirl'
//     }


  shavedIce: MenuItem[] = [
    { emoji: '🥭', name: 'Mango Ice',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍒', name: 'Cherry Ice',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍉', name: 'Watermelon Ice',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🌈', name: 'Rainbow Ice',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '💙', name: 'Blue Sky Ice',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍋', name: 'Lemon Lime Ice',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍍', name: 'Tropical Ice',price: '$10.00',description: 'Creamy frozen slush drink' }
  ];

//   slushies: MenuItem[] = [
//     {
//       name: 'Ice Cream Slushies',
//       emoji: '🥤',
//       price: '$10.00',
//       description: 'Creamy frozen slush drink'
//     }
//   ];

  shakes: MenuItem[] = [
    { emoji: '🥛', name: 'Vanilla Shake',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍫', name: 'Chocolate Shake',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍓', name: 'Strawberry Shake' ,price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍪', name: 'Oreo Shake',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍌', name: 'Banana Shake' ,price: '$10.00',description: 'Creamy frozen slush drink'}
  ];

  smoothies: MenuItem[] = [
    { emoji: '🍓', name: 'Strawberry Smoothie',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🥭', name: 'Mango Smoothie',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍓🍌', name: 'Strawberry Banana',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍍', name: 'Pina Colada',price: '$10.00',description: 'Creamy frozen slush drink' }
  ];

  sundaes: MenuItem[] = [
    { emoji: '🍪', name: 'Oreo Sundae',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍫', name: 'Brownie Sundae',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍯', name: 'Caramel Sundae',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍓', name: 'Strawberry Sundae',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍍', name: 'Pineapple Sundae',price: '$10.00',description: 'Creamy frozen slush drink' }
  ];

  bubbleTea: MenuItem[] = [
    { emoji: '🥤', name: 'Thai Tea',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🟣', name: 'Taro Milk Tea',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🟤', name: 'Brown Sugar Milk Tea',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍵', name: 'Green Tea',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🍓', name: 'Strawberry Tea',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🥭', name: 'Mango Tea',price: '$10.00',description: 'Creamy frozen slush drink' }
  ];

  beverages: MenuItem[] = [
    { emoji: '🥤', name: 'Coca-Cola Float',price: '$10.00',description: 'Creamy frozen slush drink' },
    { emoji: '🥤', name: 'Fanta Float' ,price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🥤', name: 'Root Beer Float',price: '$10.00',description: 'Creamy frozen slush drink' }
  ];

  toppings: MenuItem[] = [
    { emoji: '🍫', name:'Chocolate Dip',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍓', name:'Cherry Dip',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🧁', name:'Blue Raspberry Dip',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍪', name:'Oreo',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🥜', name:'Peanuts',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍭', name:'Rainbow Sprinkles',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🍫',  name:'Chocolate Sprinkles',price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🧁', name:"Reese's Pieces",price: '$10.00',description: 'Creamy frozen slush drink'},
    { emoji: '🧁', name:'Fruity Pebbles',price: '$10.00',description: 'Creamy frozen slush drink'}
  ];

  showMenu(section: string) {
    this.activeSection = section;
  }

}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';


// interface MenuItem {
//   emoji: string;
//   name: string;
//   description?: string;
// }
//   @Component({
//     selector: 'app-menu',
//     templateUrl: './menu.component.html',
//     styleUrls: ['./menu.component.scss']
//   })
//   export class MenuComponent {

//   activeSection: string = 'cones';
//   // 🍦 Cones
//   cones: MenuItem[] = [
//     { emoji: '🍦', name: 'Vanilla Cone' },
//     { emoji: '🍫', name: 'Chocolate Cone' },
//     { emoji: '🍦🍫', name: 'Swirl Cone' },
//     { emoji: '🍫', name: 'Chocolate Dipped Cone' },
//     { emoji: '🍒', name: 'Cherry Dipped Cone' },
//     { emoji: '🍪', name: 'Oreo Cone' },
//     { emoji: '🥜', name: 'Peanut Cone' },
//     { emoji: '🌈', name: 'Rainbow Sprinkles Cone' },
//     { emoji: '🍫', name: 'Chocolate Sprinkles Cone' },
//     { emoji: '🥣', name: 'Fruity Pebbles Cone' }
//   ];

//   // ❄️ Shaved Ice / Slushies
//   shavedIce: MenuItem[] = [
//     { emoji: '🥭', name: 'Mango Ice' },
//     { emoji: '🍒', name: 'Cherry Ice' },
//     { emoji: '🍉', name: 'Watermelon Ice' },
//     { emoji: '🌈', name: 'Rainbow Ice' },
//     { emoji: '💙', name: 'Blue Sky Ice' },
//     { emoji: '🍋', name: 'Lemon Lime Ice' },
//     { emoji: '🍍', name: 'Tropical Ice' }
//   ];

//   // 🥤 Shakes
//   shakes: MenuItem[] = [
//     { emoji: '🥛', name: 'Vanilla Shake' },
//     { emoji: '🍫', name: 'Chocolate Shake' },
//     { emoji: '🍓', name: 'Strawberry Shake' },
//     { emoji: '🍪', name: 'Oreo Shake' },
//     { emoji: '🍌', name: 'Banana Shake' }
//   ];

//   // 🍹 Smoothies
//   smoothies: MenuItem[] = [
//     { emoji: '🍓', name: 'Strawberry Smoothie' },
//     { emoji: '🥭', name: 'Mango Smoothie' },
//     { emoji: '🍓🍌', name: 'Strawberry Banana' },
//     { emoji: '🍍', name: 'Pina Colada' }
//   ];

//   // 🍨 Sundaes
//   sundaes: MenuItem[] = [
//     { emoji: '🍪', name: 'Oreo Sundae' },
//     { emoji: '🍫', name: 'Brownie Sundae' },
//     { emoji: '🍯', name: 'Caramel Sundae' },
//     { emoji: '🍓', name: 'Strawberry Sundae' },
//     { emoji: '🍍', name: 'Pineapple Sundae' }
//   ];

//   //  🍵 Bubble Tea
//   bubbleTea: MenuItem[] = [
//     { emoji: '🥤', name: 'Thai Tea' },
//     { emoji: '🟣', name: 'Taro Milk Tea' },
//     { emoji: '🟤', name: 'Brown Sugar Milk Tea' },
//     { emoji: '🍵', name: 'Green Tea' },
//     { emoji: '🍓', name: 'Strawberry Tea' },
//     { emoji: '🥭', name: 'Mango Tea' }
//   ];

//   // 🥤 Floats
//   beverages: MenuItem[] = [
//     { emoji: '🥤', name: 'Coca-Cola Float' },
//     { emoji: '🥤', name: 'Fanta Float' },
//     { emoji: '🥤', name: 'Root Beer Float' }
//   ];
  
//   // 🧁 Toppings
//    toppings: MenuItem[] = [
//     { emoji: '🍫', name:'Chocolate Dip'},
//     { emoji: '🍓', name:'Cherry Dip'},
//     { emoji: '🧁', name:'Blue Raspberry Dip'},
//     { emoji: '🍪', name:'Oreo'},
//     { emoji: '🥜', name:'Peanuts'},
//     { emoji: '🍭', name:'Rainbow Sprinkles'},
//     { emoji: '🍫',  name:'Chocolate Sprinkles'},
//     { emoji: '🧁', name:"Reese's Pieces"},
//     { emoji: '🧁', name:'Fruity Pebbles'}
//    ]
//   }
//     🍫 → Chocolate

// 🍓 → Strawberry

// 🍯 → Honey / caramel vibes

// 🍪 → Cookie crumbs

// 🥜 → Nuts

// 🧁 → Cream topping

// 🍬 → Candy / sweet toppings

// 🍭 → Syrup / sweet drizzle

// 🍦 → Ice cream topping
//   ];
