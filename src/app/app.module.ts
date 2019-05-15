import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    VatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwiraMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Specify AvatarModule as an import
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
