import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-rental-panel',
  templateUrl: './rental-panel.component.html',
  styleUrls: ['./rental-panel.component.css']
})
export class RentalPanelComponent {

  constructor (private service: AllServicesService) {

  }

  email = localStorage.getItem("email")

  formGrp = new FormGroup({
    email: new FormControl(''),
    location: new FormControl(''),
    pickupDate: new FormControl(''),
    pickupTime: new FormControl(''),
    returnDate: new FormControl(''),
    returnTime: new FormControl(''),
    carCategory: new FormControl(''),
    carModel: new FormControl(''),
  });

  formdata = {
    email: '',
    location: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    carCategory: '',
    carModel: '',
  }

  submit(formdata: any) {
     this.service.reservation(formdata)
     .subscribe((res) => {
       console.log(res);
    })

  }
}
