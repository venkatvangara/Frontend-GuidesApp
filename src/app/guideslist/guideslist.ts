import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-guideslist',
  imports: [CommonModule],
  templateUrl: './guideslist.html',
  styleUrls: ['./guideslist.css'],
})


export class Guideslist {
  guides = [
    {
      id: 1,
      city: "London",
      landmark: "London Bridge",
     
      image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/tower_bridge_non-editorial_lkjzih?_a=BAVAZGGf0",
      description: "3-day guide to explore London",
      days: [
        { day: 1, activities: ["Big Ben", "London Bridge", "Thames Walk"] },
        { day: 2, activities: ["British Museum", "Covent Garden", "Soho"] },
        { day: 3, activities: ["Tower Bridge", "Greenwich", "Boat Tour"] }
      ]
    },
    {
      id: 2,
      city: "Paris",
      landmark: "Eiffel Tower",
      
      image: "https://www.grayline.com/wp-content/uploads/2025/04/shutterstock_2464630783-scaled.jpg",
      description: "3-day guide to explore Paris",
      days: [
        { day: 1, activities: ["Eiffel Tower", "Seine Cruise", "Champs-Élysées"] },
        { day: 2, activities: ["Louvre Museum", "Tuileries Garden", "Montmartre"] },
        { day: 3, activities: ["Notre-Dame", "Latin Quarter", "Boat Dinner"] }
      ]
    },
    {
      id: 3,
      city: "Rome",
      landmark: "Colosseum",   
    
      image: "https://northabroad.com/wp-content/uploads/pisa-tuscany-cover-PITT3082.jpg",
      description: "4-day guide to explore Rome",
      days: [
        { day: 1, activities: ["Colosseum", "Roman Forum", "Palatine Hill"] },
        { day: 2, activities: ["Vatican Museums", "St. Peter’s Basilica"] },
        { day: 3, activities: ["Pantheon", "Trevi Fountain", "Piazza Navona"] },
        { day: 4, activities: ["Appian Way", "Catacombs", "Trastevere"] }
      ]
    },
    {
      id: 4,
      city: "New York",
      landmark: "Statue of Liberty",
      
      image: "https://images.unsplash.com/photo-1585155967849-91c736589c84",
      description: "3-day guide to explore New York",
      days: [
        { day: 1, activities: ["Statue of Liberty", "Ellis Island", "Wall Street"] },
        { day: 2, activities: ["Times Square", "Central Park", "Broadway"] },
        { day: 3, activities: ["Brooklyn Bridge", "Empire State Building"] }
      ]
    },
    {
      id: 5,
      city: "Sydney",
      landmark: "Sydney Opera House",
      
      image: "https://images.unsplash.com/photo-1527915676329-fd5ec8a12d4b",
      description: "3-day guide to explore Sydney",
      days: [
        { day: 1, activities: ["Opera House", "Harbour Bridge", "Circular Quay"] },
        { day: 2, activities: ["Bondi Beach", "Coastal Walk"] },
        { day: 3, activities: ["Taronga Zoo", "Darling Harbour"] }
      ]
    }
  ];

  selectedGuide: any = null;
  selectedDay = 0;

  selectGuide(g: any) {
    this.selectedGuide = g;
    this.selectedDay = 0;
  }
  scrolltocities() {
  const element = document.getElementById('citiesid');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}



