
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
  error: string | undefined = undefined;

  constructor(private http:HttpClient) {}


  ngOnInit(): void {
    this.http.get<UserProfile>('http://localhost:3001').subscribe(data => {
      console.log(data)
      this.profile = data
    }, err => {
      this.error = "Error here"
      console.log(err)
    })
  }
}

