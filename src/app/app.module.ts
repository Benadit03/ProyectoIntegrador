import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoApComponent } from './component/logo-ap/logo-ap.component';
import { HeaderComponent } from './component/header/header.component';
import { SocialComponent } from './component/social/social.component';
import { ButtonLoginComponent } from './component/button-login/button-login.component';
import { BannerComponent } from './component/banner/banner.component';
import { AboutMeComponent } from './component/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoApComponent,
    HeaderComponent,
    SocialComponent,
    ButtonLoginComponent,
    BannerComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
