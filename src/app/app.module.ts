import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./component/header/HeaderComponent";
import { SocialComponent } from './component/social/social.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { StudyComponent } from './component/study/study.component';
import { HardSoftComponent } from './component/hard-soft/hard-soft.component';
 
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectComponent } from './component/proyect/proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    AboutMeComponent,
    ExperienceComponent,
    StudyComponent,
    HardSoftComponent,
    ProyectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgCircleProgressModule,
 
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }

