import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [ {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"aboutus",component:AboutusComponent},
{path:"contactus",component:ContactusComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
