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
      imageUrl: 'assets/tree1.jpg',
      title: 'Project 1',
      description: 'Description for Project 1'
    },
    {
      imageUrl: 'assets/tree2.jpg',
      title: 'Project 2',
      description: 'Description for Project 2'
    },
    {
      imageUrl: 'assets/tree3.jpg',
      title: 'Project 3',
      description: 'Description for Project 3'
    }
  ];
}
