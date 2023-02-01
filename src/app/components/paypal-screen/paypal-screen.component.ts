import { Component } from '@angular/core';
import { render } from "creditcardpayments/creditCardPayments";

@Component({
  selector: 'app-paypal-screen',
  templateUrl: './paypal-screen.component.html',
  styleUrls: ['./paypal-screen.component.css']
})
export class PaypalScreenComponent {
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
