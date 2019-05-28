import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{RouterModule}from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularEditorModule} from '@kolkov/angular-editor';
// import { NgxCountrySelectModule } from 'ngx-country-select/dist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AwiraMaterialModule } from './material-module';
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
import { LoginComponent } from './home-page/login/login.component';
import { RegisterComponent } from './home-page/register/register.component';
import { HeaderProfileBtnComponent } from './shared/header-artist/header-profile-btn/header-profile-btn.component';

// import { NewPostTextComponent } from './artist-portal/artist-posts/new-posts/new-post-text/new-post-text.component';
// import { NewPostVideoComponent } from './artist-portal/artist-posts/new-posts/new-post-video/new-post-video.component';
// import { NewPostImageComponent } from './artist-portal/artist-posts/new-posts/new-post-image/new-post-image.component';

import { NewPostTextComponent, DialogOverviewExampleDialogComponent } from './artist-portal/artist-posts/new-posts/new-post-text/new-post-text.component';
import { NewPostVideoComponent,VDialogOverviewExampleDialogComponent } from './artist-portal/artist-posts/new-posts/new-post-video/new-post-video.component';
import { NewPostImageComponent ,IDialogOverviewExampleDialogComponent,DeletePostDialog} from './artist-portal/artist-posts/new-posts/new-post-image/new-post-image.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ArtistProfileComponent } from './artist-portal/artist-profile/artist-profile.component';
import { ArtistNotificationsComponent } from './artist-portal/artist-notifications/artist-notifications.component';
import { ArtistProfilePostsComponent } from './artist-portal/artist-profile/artist-profile-posts/artist-profile-posts.component';
import { ArtistProfileOverviewComponent } from './artist-portal/artist-profile/artist-profile-overview/artist-profile-overview.component';
import { ArtistPatronsComponent } from './artist-portal/artist-patrons/artist-patrons.component';
import { ArtistPatronsRelationshipComponent } from './artist-portal/artist-patrons/artist-patrons-relationship/artist-patrons-relationship.component';

import { ArtistSettingsAccountComponent } from './artist-portal/artist-settings/artist-settings-account/artist-settings-account.component';
import { ArtistSettingsTeamComponent } from './artist-portal/artist-settings/artist-settings-team/artist-settings-team.component';
import { ArtistSettingsAppsComponent } from './artist-portal/artist-settings/artist-settings-apps/artist-settings-apps.component';
import { ArtistSettingsYouremailsettingsComponent } from './artist-portal/artist-settings/artist-settings-youremailsettings/artist-settings-youremailsettings.component';
import { ArtistProfileEmailsettingsComponent } from './artist-portal/artist-profile/artist-profile-emailsettings/artist-profile-emailsettings.component';
import { ArtistProfileUserprofileComponent } from './artist-portal/artist-profile/artist-profile-userprofile/artist-profile-userprofile.component';
import { HomeComponent } from './home-page/home/home.component';
import { PricingComponent } from './home-page/pricing/pricing.component';
import { ArtistMessageComponent } from './artist-portal/artist-message/artist-message.component';
import { ArtistMessageProfileComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile.component';
import { ArtistMessagePageComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page.component';
import { ArtistMessageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-all/artist-message-all.component';
import { ArtistMessageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-unread/artist-message-unread.component';
import { ArtistMessageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-read/artist-message-read.component';
import { ArtistMessagePageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-all/artist-message-page-all.component';
import { ArtistMessagePageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-read/artist-message-page-read.component';
import { ArtistMessagePageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-unread/artist-message-page-unread.component';
import { ArtistMessageProfileUnreadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-unread/artist-message-profile-unread.component';
import { ArtistMessageProfileReadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-read/artist-message-profile-read.component';
import { ArtistMessageProfileAllComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-all/artist-message-profile-all.component';
import { ArtistIncomeComponent } from './artist-portal/artist-income/artist-income.component';
import { ArtistPayoutComponent } from './artist-portal/artist-income/artist-payout/artist-payout.component';
import { ArtistHomeComponent } from './artist-portal/artist-home/artist-home.component';
import { ArtistHomeAllpostComponent } from './artist-portal/artist-home/artist-home-allpost/artist-home-allpost.component';
import { ArtistHomePatrononlypostComponent } from './artist-portal/artist-home/artist-home-patrononlypost/artist-home-patrononlypost.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
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
    ArtistEditOffersComponent,
    LoginComponent,
    DialogOverviewExampleDialogComponent,
    IDialogOverviewExampleDialogComponent,
    VDialogOverviewExampleDialogComponent,
    DeletePostDialog,
    RegisterComponent,
    HeaderProfileBtnComponent,
    ArtistMessageComponent,
    ArtistMessageAllComponent,
    ArtistMessageUnreadComponent,
    ArtistMessageReadComponent,
    ArtistMessageProfileComponent,
    ArtistMessagePageComponent,
    ArtistMessageProfileReadComponent,
    ArtistMessageProfileAllComponent,
    ArtistMessageProfileUnreadComponent,
    NewPostTextComponent,
    NewPostVideoComponent,
    NewPostImageComponent,

    ArtistSettingsAccountComponent,
    ArtistSettingsTeamComponent,
    ArtistSettingsAppsComponent,
    ArtistSettingsYouremailsettingsComponent,   
    ArtistProfileComponent,
    ArtistProfileEmailsettingsComponent,
    ArtistProfileUserprofileComponent,
    HomeComponent,
    PricingComponent,
    ArtistNotificationsComponent,
    ArtistProfilePostsComponent,
    ArtistProfileOverviewComponent,
    ArtistPatronsComponent,
    ArtistPatronsRelationshipComponent,
    ArtistSettingsAccountComponent,
    ArtistSettingsTeamComponent,
    ArtistSettingsAppsComponent,
    ArtistSettingsYouremailsettingsComponent,
    ArtistProfileComponent,
    ArtistMessageComponent,
    ArtistMessageProfileComponent,
    ArtistMessagePageComponent,
    ArtistMessagePageAllComponent,
    ArtistMessagePageReadComponent,
    ArtistMessagePageUnreadComponent,
    ArtistMessageProfileUnreadComponent,
    ArtistMessageProfileReadComponent,
    ArtistMessageProfileAllComponent,
    ArtistIncomeComponent,
    ArtistPayoutComponent,
    ArtistHomeComponent,
    ArtistHomeAllpostComponent,
    ArtistHomePatrononlypostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AwiraMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Specify AvatarModule as an import
    AvatarModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,
    AngularEditorModule
    // NgxCountrySelectModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent,IDialogOverviewExampleDialogComponent,
    VDialogOverviewExampleDialogComponent,
    DeletePostDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
