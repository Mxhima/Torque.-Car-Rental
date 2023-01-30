import { Component } from '@angular/core';
import { render } from "creditcardpayments/creditCardPayments";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {

  constructor() {
    render ({
      id: "#myPaypalBtns",
      currency: "USD",
      value: "120.00",
      onApprove: (details) => {
        alert("Transaction successful!");
      }
    });
  }

}
