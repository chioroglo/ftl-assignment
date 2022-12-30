import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {RouteNotFoundPageComponent} from "./components/route-not-found-page/route-not-found-page.component";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "", redirectTo: "/login", pathMatch: "full"}, // TODO add route guard
  { path: "**", component: RouteNotFoundPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }