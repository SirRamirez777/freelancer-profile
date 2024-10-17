
import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-skill',
  template: `
    <div>
      <p>{{ skillName }} (Level: {{ skillLevel }})</p>
      <!-- Your star logic here -->
    </div>
  `,
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  standalone: true,
  imports: [NgClass, NgIf, NgFor],

})
export class SkillComponent {
  @Input() skillName: string = '';
  @Input() skillLevel: number = 0;
profile: any;

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

