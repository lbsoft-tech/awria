import { Component, OnInit } from '@angular/core';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { DatabaseService } from 'src/app/services/database/database.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-stripe-dialog',
  templateUrl: './stripe-dialog.component.html',
  styleUrls: ['./stripe-dialog.component.scss']
})
export class StripeDialogComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  card_error: any;



  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'auto'
  };

  constructor(
    public dialogRef: MatDialogRef<StripeDialogComponent>,
    private stripeService: StripeService,
    private api: DatabaseService,
    private spinner: NgxSpinnerService
  ) {
  }



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
        }
        this.card.mount('#card_element');
        //$('#stripe_modal').modal('show');
      });
  }

  save_card(event) {
    this.spinner.show();
    this.stripeService
      .createToken(this.card, {})
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          this.api.add_card(result.token).subscribe((result) => {
            console.log(result);
            if (result.status) {
              this.spinner.hide();
              this.dialogRef.close();
              Swal.fire({
                title: 'Success',
                text: 'Card added.',
                type: 'success',
                confirmButtonText: 'Ok'
              });
            }
          },
            (error) => {
              this.spinner.hide();
              console.log(error);
            });
          console.log(result);
        } else if (result.error) {
          // Error creating the token
          //console.log(result.error.message);
          this.spinner.hide();
          this.card_error = result.error.message;
        }
      });
  }

}
