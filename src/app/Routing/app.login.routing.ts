import {Routes} from "@angular/router";
import {AppRegistrationcomponent} from "../Components/app.registrationcomponent";
import {AppHomecomponent} from "../Components/app.homecomponent";
import {AppComponent} from "../app.component";

export const loginRouting: Routes = [
  {
    path: '', component: AppComponent, canActivateChild: [],
    children: [
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'home', component: AppHomecomponent },
      { path: 'login', component: AppRegistrationcomponent },
    ]
  }
]
