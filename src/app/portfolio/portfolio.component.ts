import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from "@angular/common";

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass, NgIf, NgFor,CommonModule, CarouselModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = [
    {
      imageUrl: 'assets/weatherapp1.jpg',
      title: 'Weather App',
      description: 'Weather app',
      siteUrl: 'https://openweather2.netlify.app'
    },
    {
      imageUrl: 'assets/hamburgerfood.jpg',
      title: 'Hamburger Food',
      description: 'Hamburger food website',
      siteUrl: 'https://hamburgerfood101.netlify.app/'
    },
    {
      imageUrl: 'assets/PongGame.jpg',
      title: 'Pong-Game',
      description: 'Start game',
      siteUrl: 'https://pong-game101.netlify.app'
    },

  ];
}
