import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {RouteNotFoundPageComponent} from './components/route-not-found-page/route-not-found-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppEffects} from './app.effects';
import {authReducer} from "./states/auth/auth.reducer";
import {AuthEffects} from "./states/auth/auth.effects";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CustomSidebarButtonComponent} from './components/custom-sidebar-button/custom-sidebar-button.component';

const muiModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
]


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfilePageComponent,
    RouteNotFoundPageComponent,
    SidebarComponent,
    CustomSidebarButtonComponent
  ],
  imports: [
    ...muiModules,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
