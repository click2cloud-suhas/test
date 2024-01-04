import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SpeachComponent} from "./speach/speach.component";
import {MyfarmComponent} from "./myfarm/myfarm.component";
import {ListComponent} from "./list/list.component";
// import {ChatBotComponent} from "./chat-bot/chat-bot.component";

import {MyHomeComponent} from "./my-home/my-home.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-list', component: ListComponent },

  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-speach', component: SpeachComponent },
  { path: 'app-myfarm', component: MyfarmComponent },
  // { path: 'app-chat-bot', component: ChatBotComponent },
  { path: 'app-my-home', component: MyHomeComponent },
  { path: 'app-profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
