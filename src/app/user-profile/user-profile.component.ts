
import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

interface Portfolio {
  title : string
  link : string
}
interface SocialLinks{
  linkedin: string
  github: string
}
interface Contact{
  email: string
  phone: string
}
interface UserProfile {
  profilePicture: string
  name : string
  location : string
  hourlyRate : number
  bio : string
  skills : string []
  portfolio : Portfolio[]
  socialLinks : SocialLinks
  contact: Contact

}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: UserProfile | undefined = undefined;

  constructor(private http:HttpClient) {}
  

  ngOnInit(): void {
    this.http.get<UserProfile>('http://localhost:3001').subscribe(data => {
      console.log(data)
      this.profile = data
    })
    // this.profile = {
    //   name: 'Nhlakanipho Romeo Khoza',
    //   location: 'Durban, Umhlanga',
    //   hourlyRate: 100,
    //   bio: 'I will be showcasing some of my work and extra features and all the usual stuff you would expect. I hope you dig it!',
    //   skills: ['Angular', 'TypeScript', 'CSS', 'JavaScript', 'HTML'],
    //   portfolio: [
    //     { title: 'Project 1', link: 'http://example.com', image: 'assets/project1.jpg' },
    //     { title: 'Project 2', link: 'http://example.com', image: 'assets/project2.jpg' }
    //   ],
    //   socialMedia: [
    //     { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nhlakanipho-romeo-khoza-779a60130/' },
    //     { platform: 'GitHub', url: 'https://github.com/SirRamirez777' }
    //   ],
    //   contact: {
    //     email: 'nhlakaniphoromeo95@gmail.com',
    //     phone: '+27729965256'
    //   }
    // };
  }
}

