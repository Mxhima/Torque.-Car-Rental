import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsScreenComponent } from './Pages/about-us-screen/about-us-screen.component';
import { CarsScreenComponent } from './Pages/cars-screen/cars-screen.component';
import { ContactUsScreenComponent } from './Pages/contact-us-screen/contact-us-screen.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent},
  { path: 'aboutus', component: AboutUsScreenComponent},
  { path: 'contactus', component: ContactUsScreenComponent},
  { path: 'cars', component: CarsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
