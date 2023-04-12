import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SuggestUserComponent } from './suggest-user/suggest-user.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomePageComponent},
  {path:'viewUser',component:ViewUserComponent},
  {path:'suggestUser/:username',component:SuggestUserComponent},
  {path:'loginUser/:username',component:SuggestUserComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
