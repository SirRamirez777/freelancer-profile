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
      name: 'Nhlakanipho Romeo Khoza',
      location: 'Durban, Umhlanga',
      hourlyRate: 100,
      bio: 'I will be showcasing some of my work and extra features and all the usual stuff you would expect. I hope you dig it!',
      skills: ['Angular', 'TypeScript', 'CSS', 'JavaScript', 'HTML'],
      portfolio: [
        { title: 'Project 1', link: 'http://example.com', image: 'assets/project1.jpg' },
        { title: 'Project 2', link: 'http://example.com', image: 'assets/project2.jpg' }
      ],
      socialMedia: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nhlakanipho-romeo-khoza-779a60130/' },
        { platform: 'GitHub', url: 'https://github.com/SirRamirez777' }
      ],
      contact: {
        email: 'nhlakaniphoromeo95@gmail.com',
        phone: '+27729965256'
      }
    };
  }
}

