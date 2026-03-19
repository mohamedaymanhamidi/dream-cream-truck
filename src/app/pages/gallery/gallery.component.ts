import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

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