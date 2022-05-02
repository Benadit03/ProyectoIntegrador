import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./component/header/HeaderComponent";
import { SocialComponent } from './component/social/social.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { StudyComponent } from './component/study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    AboutMeComponent,
    ExperienceComponent,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
