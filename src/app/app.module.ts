import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RouteNotFoundPageComponent } from './components/route-not-found-page/route-not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfilePageComponent,
    RouteNotFoundPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
