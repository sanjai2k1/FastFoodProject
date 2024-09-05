import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactUsComponent } from './Components/contactus/contactus.component';
import { HomeComponent } from './Components/home/home.component';
import { Carousel06Component } from './Components/carousel06/carousel06.component';
import { CarotestComponent } from './Components/carotest/carotest.component';

const routes: Routes = [{path:"",component:HomeComponent}, 
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"aboutus",component:AboutusComponent},
{path:"contactus",component:ContactUsComponent},

{path:"carousel",component : CarotestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
