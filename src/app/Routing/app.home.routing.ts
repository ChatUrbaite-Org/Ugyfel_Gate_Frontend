import {AppLogincomponent} from "../Components/app.logincomponent";
import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {AppHomecomponent} from "../Components/app.homecomponent";

export const registrationRouting: Routes = [
  {
    path: '', component: AppComponent, canActivateChild: [],
    children: [
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'home', component: AppHomecomponent },
      { path: 'registration', component: AppLogincomponent },
    ]
  }
]
