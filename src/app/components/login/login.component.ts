import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private service: AllServicesService, private router:Router) {

  }

  formdata = {
    email: '',
    password: ''
  }

  login () {
    this.service.login(this.formdata).subscribe((res: any) => {
      localStorage.setItem("email", res.user.email)
      this.router.navigate(["/"])
    })
  }
}
