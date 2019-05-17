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
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistPortalComponent } from './artist-portal/artist-portal.component';
import { HeaderArtistComponent } from './shared/header-artist/header-artist.component';
import { ArtistPostsComponent } from './artist-portal/artist-posts/artist-posts.component';
import { NewPostsComponent } from './artist-portal/artist-posts/new-posts/new-posts.component';
import { ArtistSettingsComponent } from './artist-portal/artist-settings/artist-settings.component';
import { ArtistEditComponent } from './artist-portal/artist-edit/artist-edit.component';
import { ArtistEditAboutComponent } from './artist-portal/artist-edit/artist-edit-about/artist-edit-about.component';
import { ArtistEditTiersComponent } from './artist-portal/artist-edit/artist-edit-tiers/artist-edit-tiers.component';
import { ArtistEditGoalComponent } from './artist-portal/artist-edit/artist-edit-goal/artist-edit-goal.component';
import { ArtistEditThanksComponent } from './artist-portal/artist-edit/artist-edit-thanks/artist-edit-thanks.component';
import { ArtistEditPaymentstabsComponent } from './artist-portal/artist-edit/artist-edit-paymentstabs/artist-edit-paymentstabs.component';
import { ArtistEditPoststabComponent } from './artist-portal/artist-edit/artist-edit-poststab/artist-edit-poststab.component';
import { ArtistEditOffersComponent } from './artist-portal/artist-edit/artist-edit-offers/artist-edit-offers.component';


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
    PaymentstabComponent,
    HomePageComponent,
    ArtistPortalComponent,
    HeaderArtistComponent,
    ArtistPostsComponent,
    NewPostsComponent,
    ArtistSettingsComponent,
    ArtistEditComponent,
    ArtistEditAboutComponent,
    ArtistEditTiersComponent,
    ArtistEditGoalComponent,
    ArtistEditThanksComponent,
    ArtistEditPaymentstabsComponent,
    ArtistEditPoststabComponent,
    ArtistEditOffersComponent
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
