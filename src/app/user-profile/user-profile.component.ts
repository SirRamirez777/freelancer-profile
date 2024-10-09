// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-profile',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-profile.component.html',
//   styleUrl: './user-profile.component.css'
// })
// export class UserProfileComponent {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: any;

  constructor() {}

  ngOnInit(): void {
    this.profile = {
      name: 'John Doe',
      location: 'New York, USA',
      hourlyRate: 50,
      bio: 'Experienced web developer with a strong background in front-end technologies...',
      skills: ['Angular', 'TypeScript', 'CSS', 'JavaScript', 'HTML'],
      portfolio: [
        { title: 'Project 1', link: 'http://example.com', image: 'assets/project1.jpg' },
        { title: 'Project 2', link: 'http://example.com', image: 'assets/project2.jpg' }
      ],
      socialMedia: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
        { platform: 'GitHub', url: 'https://github.com/johndoe' }
      ],
      contact: {
        email: 'john.doe@example.com',
        phone: '+1234567890'
      }
    };
  }
}

