import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { StripeDialogComponent } from '../../stripe-dialog/stripe-dialog.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';
//import { $ } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  stripe_dialog;
  card_status_subject: Subject<boolean>;
  card_status_observable: Observable<boolean>;

  constructor(
    private dialog_service: MatDialog,
    private auth: AuthService,
    private api: DatabaseService,
  ) {
    this.card_status_subject = new BehaviorSubject<boolean>(false);
    this.card_status_observable = this.card_status_subject.asObservable();
    this.update_card_status();
  }

  ngOnInit() {
  }

  update_card_status() {
    const id = this.auth.currentUserValue.id;
    this.api.get_card_status({ id: id }).subscribe((result) => {
      if (result.status) {
        this.card_status_subject.next(true);
      }
      else {
        this.card_status_subject.next(false);
      }
    });
  }

  open_stripe_dialog() {
    this.stripe_dialog = this.dialog_service.open(StripeDialogComponent, {
      width: '50%',
      height: 'fit-content',
    });
    this.stripe_dialog.afterClosed().subscribe(result => {
      this.update_card_status();
    });
  }

}
