

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppComponent,
    SkillComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

