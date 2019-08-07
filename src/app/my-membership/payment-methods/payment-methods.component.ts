import { Component, OnInit } from '@angular/core';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { FormBuilder } from '@angular/forms';
import { $ } from 'protractor';


@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  card_error:any;

    // optional parameters
    elementsOptions: ElementsOptions = {
      locale: 'auto'
    };

  constructor(private fb: FormBuilder,
    private stripeService: StripeService) { }

  

  ngOnInit() {
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
        //$('#stripe_modal').modal('show');
      });
  }

  save_card() {
    this.stripeService
      .createToken(this.card,{})
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
          this.card_error = result.error.message;
        }
      });
  }

}
