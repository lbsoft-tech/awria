import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AwiraMaterialModule } from './material-module';
import { PostsComponent } from './pages/dashboard/posts/posts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RefundsComponent } from './pages/dashboard/income/refunds/refunds.component';
import { PayoutsComponent } from './pages/dashboard/income/payouts/payouts.component';
import { PaymentsComponent } from './pages/dashboard/income/payments/payments.component';
import { VatComponent } from './pages/dashboard/income/vat/vat.component';
import { EditComponent } from './pages/dashboard/edit/edit.component';
import { Demo1Component } from './pages/dashboard/edit/demo1/demo1.component';
import { AboutComponent } from './pages/dashboard/edit/about/about.component';
import { TiersComponent } from './pages/dashboard/edit/tiers/tiers.component';
import { GoalsComponent } from './pages/dashboard/edit/goals/goals.component';
import { ThanksComponent } from './pages/dashboard/edit/thanks/thanks.component';
import { OffersComponent } from './pages/dashboard/edit/offers/offers.component';
import { PoststabComponent } from './pages/dashboard/edit/poststab/poststab.component';
import { PaymentstabComponent } from './pages/dashboard/edit/paymentstab/paymentstab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    PostsComponent,
    DashboardComponent,
    RefundsComponent,
    PayoutsComponent,
    PaymentsComponent,
    VatComponent,
    EditComponent,
    Demo1Component,
    AboutComponent,
    TiersComponent,
    GoalsComponent,
    ThanksComponent,
    OffersComponent,
    PoststabComponent,
    PaymentstabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwiraMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Specify AvatarModule as an import
    AvatarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
