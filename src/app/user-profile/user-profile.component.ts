
import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

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
interface Profile{
  id : number,
  user_id : number,
  job_title : string,
  description : string,
  hourly_rate : number,
  bio : string,
  availability : string,
  city : string,
  state : string,
  country : string,
  skills: Skill[]
  experiences: Experiences[]
  social_links: SocialLinks[]
  certifications : Certifications []
  education : Education [],
  portfolio_items : Portfolio_items [],
  reviews : Reviews []
}
interface Skill {
  id: number,
  name : string,
  level : string
}
interface Experiences{
  id : number,
  company: string,
  position : string,
  start_date : Date,
  end_date : Date,
  description : number
}
interface Education{
  id: number,
  institution :string,
  degree : string,
  field_of_study : string,
  start_date : Date,
  end_date : Date
}
interface Certifications{
  id: number,
  name : string
  issuing_organization : string,
  issue_date : Date,
  expiration_date : Date
}
interface Portfolio_items{
  id: number,
  title : string,
  description : string,
  url : string
}
interface Reviews{
  id: number,
  client_id : number,
  rating : number,
  comment : string,
  created_at : Date

}
interface Social_links{
  id: number,
  platform : string,
  url: string
}
interface Subscription{
  id : number,
  plan : string,
  start_date : Date,
  end_date : Date,
  is_active : boolean
}

interface Data{
  profile: Profile
  id : number,
  first_name : string,
  last_name : string,
  email : string,
  username : string,
  role : string,
  is_active : boolean,
  name : string
  subscription : Subscription

}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [PortfolioComponent],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: Data | undefined = undefined;
  error: string | undefined = undefined;

  constructor(private http:HttpClient) {}


  ngOnInit(): void {
    this.http.get<Data>('http://localhost:3001').subscribe(data => {
      console.log(data)
      this.userData = data
    }, err => {
      this.error = "Error here"
      console.log(err)
    })
  }

}

