import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoApComponent } from './component/logo-ap/logo-ap.component';
import { HeaderComponent } from './component/header/header.component';
import { SocialComponent } from './component/social/social.component';
import { ButtonLoginComponent } from './component/button-login/button-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoApComponent,
    HeaderComponent,
    SocialComponent,
    ButtonLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
