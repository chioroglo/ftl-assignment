import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {RouteNotFoundPageComponent} from './pages/route-not-found-page/route-not-found-page.component';
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
import {ReactionStatisticsBoxComponent} from './components/reaction-statistics-box/reaction-statistics-box.component';
import {AuthService} from "./services/auth/auth.service";
import {ProfileReactionsService} from "./services/profileReactions/profile-reactions.service";
import {ViewsChartComponent} from './components/views-chart/views-chart.component';
import {NgChartsModule} from "ng2-charts";
import {TargetProgressbarCardComponent} from './components/target-progressbar-card/target-progressbar-card.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MeetingClaimCardComponent} from './components/meeting-claim-card/meeting-claim-card.component';

const muiModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
]


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfilePageComponent,
    RouteNotFoundPageComponent,
    SidebarComponent,
    CustomSidebarButtonComponent,
    ReactionStatisticsBoxComponent,
    ViewsChartComponent,
    TargetProgressbarCardComponent,
    MeetingClaimCardComponent
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
    AppRoutingModule,
    NgChartsModule,
    MatProgressBarModule
  ],
  providers: [AuthService, ProfileReactionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
