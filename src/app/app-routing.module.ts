import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsScreenComponent } from '../app/components/about-us-screen/about-us-screen.component';
import { CarsScreenComponent } from '../app/components/cars-screen/cars-screen.component';
import { ContactUsScreenComponent } from '../app/components/contact-us-screen/contact-us-screen.component';
import { HomeScreenComponent } from '../app/components/home-screen/home-screen.component';
import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent},
  { path: 'aboutus', component: AboutUsScreenComponent},
  { path: 'contactus', component: ContactUsScreenComponent},
  { path: 'cars', component: CarsScreenComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
