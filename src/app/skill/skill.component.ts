// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skill',
//   standalone: true,
//   imports: [],
//   templateUrl: './skill.component.html',
//   styleUrl: './skill.component.css'
// })
// export class SkillComponent {

// }

import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  standalone: true,
  imports: [NgClass, NgIf, NgFor],

})
export class ProfileComponent {
  profile = {
    skills: [
      { name: 'Angular', level: 3 },
      { name: 'TypeScript', level: 2 },
      { name: 'CSS', level: 1 }
    ]
  };

  // This method will track by skill name to optimize re-rendering.
  trackBySkill(index: number, skill: any): string {
    return skill.name; // You can track by 'name' or 'id' if present
  }

  // Returns the skill level description
  getSkillLevel(skillLevel: number): string {
    if (skillLevel === 1) {
      return 'Beginner';
    } else if (skillLevel === 2) {
      return 'Intermediate';
    } else if (skillLevel === 3) {
      return 'Expert';
    }
    return '';
}
}

