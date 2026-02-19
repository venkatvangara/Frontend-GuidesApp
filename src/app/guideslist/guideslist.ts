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
    title: "Paris Trip",
    description: "3-day guide to explore Paris"
  },
  {
    id: 2,
    title: "London Adventure",
    description: "Visit the best places in London"
  }
];


}
