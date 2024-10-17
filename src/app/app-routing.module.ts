

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SkillComponent } from './skill/skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PortfolioComponent } from './portfolio/portfolio.component'; // Your Portfolio Component



@NgModule({
  declarations: [
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppComponent,
    SkillComponent,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    PortfolioComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

