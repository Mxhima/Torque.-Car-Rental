import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';
import { AboutUsScreenComponent } from './Pages/about-us-screen/about-us-screen.component';
import { ContactUsScreenComponent } from './Pages/contact-us-screen/contact-us-screen.component';
import { CarsScreenComponent } from './Pages/cars-screen/cars-screen.component';
import { FooterComponent } from './components/footer/footer.component';
import { RentalPanelComponent } from './components/rental-panel/rental-panel.component';
import { CarouselComponent } from './components/carousel/carousel.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
