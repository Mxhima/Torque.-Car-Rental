import { Component } from '@angular/core';
import { Orders } from 'src/app/model/orders';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {

  constructor (private service: AllServicesService) {

  }

  orders: Orders[] = []
  email = localStorage.getItem('email')

  ngOnInit() {
    this.service.getorderbyEmail(this.email).subscribe((res: Orders[]) => (this.orders = res))
  }
}
