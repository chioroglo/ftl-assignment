import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {RouteNotFoundPageComponent} from "./pages/route-not-found-page/route-not-found-page.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "profile", component: ProfilePageComponent,canActivate: [AuthGuard]},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "**", component: RouteNotFoundPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
