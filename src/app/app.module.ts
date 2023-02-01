import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponent } from '../app/components/home-screen/home-screen.component';
import { AboutUsScreenComponent } from '../app/components/about-us-screen/about-us-screen.component';
import { ContactUsScreenComponent } from '../app/components/contact-us-screen/contact-us-screen.component';
import { CarsScreenComponent } from '../app/components/cars-screen/cars-screen.component';
import { FooterComponent } from './components/footer/footer.component';
import { RentalPanelComponent } from './components/rental-panel/rental-panel.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ProfileScreenComponent } from '../app/components/profile-screen/profile-screen.component';
import { PaypalScreenComponent } from './components/paypal-screen/paypal-screen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    AboutUsScreenComponent,
    ContactUsScreenComponent,
    CarsScreenComponent,
    FooterComponent,
    RentalPanelComponent,
    CarouselComponent,
    SignupComponent,
    LoginComponent,
    ProfileScreenComponent,
    PaypalScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
