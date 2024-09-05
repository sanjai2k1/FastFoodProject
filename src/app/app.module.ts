import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactUsComponent } from './Components/contactus/contactus.component';
import { HomeComponent } from './Components/home/home.component';
import { Carousel06Component } from './Components/carousel06/carousel06.component';

import { CarotestComponent } from './Components/carotest/carotest.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    ContactUsComponent,
    HomeComponent,
    CarotestComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
  NgbCarouselModule
    
   
    


    
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
