import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularEditorModule } from '@kolkov/angular-editor';

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
import { NewPostTextComponent, DialogOverviewExampleDialogComponent,DeleteTextPostDialog } from './artist-portal/artist-posts/new-posts/new-post-text/new-post-text.component';

import { NewPostVideoComponent, VDialogOverviewExampleDialogComponent,DeleteVideoPostDialog } from './artist-portal/artist-posts/new-posts/new-post-video/new-post-video.component';
import { NewPostImageComponent, DeletePostDialog } from './artist-portal/artist-posts/new-posts/new-post-image/new-post-image.component';
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
import { ArtistMessageComponent } from './artist-portal/artist-message/artist-message.component';
import { ArtistMessageProfileComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile.component';
import { ArtistMessagePageComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page.component';
import { ArtistMessagePageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-all/artist-message-page-all.component';
import { ArtistMessagePageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-read/artist-message-page-read.component';
import { ArtistMessagePageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-unread/artist-message-page-unread.component';
import { ArtistMessageProfileUnreadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-unread/artist-message-profile-unread.component';
import { ArtistMessageProfileReadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-read/artist-message-profile-read.component';
import { ArtistMessageProfileAllComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-all/artist-message-profile-all.component';
import { DraftsComponent } from './artist-portal/artist-posts/drafts/drafts.component';
import { ScheduledComponent } from './artist-portal/artist-posts/scheduled/scheduled.component';
import { PublishedComponent } from './artist-portal/artist-posts/published/published.component';
import { MyMembershipComponent } from './my-membership/my-membership.component';
import { ActiveMembershipsComponent } from './my-membership/active-memberships/active-memberships.component';
import { BillingHistoryComponent } from './my-membership/billing-history/billing-history.component';
import { PaymentMethodsComponent } from './my-membership/payment-methods/payment-methods.component';
import { YourTiersComponent } from './artist-portal/artist-edit/artist-edit-tiers/your-tiers/your-tiers.component';
import { BestPracticesComponent } from './artist-portal/artist-edit/artist-edit-tiers/best-practices/best-practices.component';
import { ArtistIncomeComponent } from './artist-portal/artist-income/artist-income.component';
import { ArtistIncomePayoutComponent } from './artist-portal/artist-income/artist-income-payout/artist-income-payout.component';
import { ArtistIncomePayoutTaxformComponent } from './artist-portal/artist-income/artist-income-payout/artist-income-payout-taxform/artist-income-payout-taxform.component';
import { ArtistPatronsExitSurveyComponent } from './artist-portal/artist-patrons/artist-patrons-exit-survey/artist-patrons-exit-survey.component';
import { ArtistPatronsBlockedUsersComponent } from './artist-portal/artist-patrons/artist-patrons-blocked-users/artist-patrons-blocked-users.component';
import { ArtistIncomeEarningsComponent } from './artist-portal/artist-income/artist-income-earnings/artist-income-earnings.component';
import { ArtistIncomePledgeGrowthComponent } from './artist-portal/artist-income/artist-income-pledge-growth/artist-income-pledge-growth.component';
import { ArtistProfileSettingsComponent } from './artist-portal/artist-profile-settings/artist-profile-settings.component';
import { ArtistProfileSettingsEmailComponent } from './artist-portal/artist-profile-settings/artist-profile-settings-email/artist-profile-settings-email.component';
import { ArtistProfileSettingsUserProfileComponent } from './artist-portal/artist-profile-settings/artist-profile-settings-user-profile/artist-profile-settings-user-profile.component';
import { ArtistHomeComponent } from './artist-portal/artist-home/artist-home.component';
import { ArtistHomeAllPostsComponent } from './artist-portal/artist-home/artist-home-all-posts/artist-home-all-posts.component';
import { ArtistHomePatronPostsComponent } from './artist-portal/artist-home/artist-home-patron-posts/artist-home-patron-posts.component';
import { HomePageHomeComponent } from './home-page/home-page-home/home-page-home.component';
import { HomePagePricingComponent } from './home-page/home-page-pricing/home-page-pricing.component';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserCheckoutComponent } from './user-portal/user-checkout/user-checkout.component';
import { UserFollowComponent } from './user-portal/user-follow/user-follow.component';
import { UserHomeComponent } from './user-portal/user-home/user-home.component';
import { UserHomeAllPostsComponent } from './user-portal/user-home/user-home-all-posts/user-home-all-posts.component';
import { UserHomeAwriaPostsComponent } from './user-portal/user-home/user-home-awria-posts/user-home-awria-posts.component';
import { UserMembershipsComponent } from './user-portal/user-memberships/user-memberships.component';
import { UserMessageComponent } from './user-portal/user-message/user-message.component';

import { UserProfileComponent } from './user-portal/user-profile/user-profile.component';
import { UserSettingComponent } from './user-portal/user-setting/user-setting.component';
import { UserProfileEmailComponent } from './user-portal/user-setting/user-profile-email/user-profile-email.component';
import { UserProfileSettingComponent } from './user-portal/user-setting/user-profile-setting/user-profile-setting.component';
import { UserMessageProfileAllComponent } from './user-portal/user-message/user-message-profile/user-message-profile-all/user-message-profile-all.component';
import { UserMessageProfileReadComponent } from './user-portal/user-message/user-message-profile/user-message-profile-read/user-message-profile-read.component';
import { UserMessageProfileUnreadComponent } from './user-portal/user-message/user-message-profile/user-message-profile-unread/user-message-profile-unread.component';
import { UserMessageProfileComponent } from './user-portal/user-message/user-message-profile/user-message-profile.component';
import { HeaderUserComponent } from './shared/header-user/header-user.component';
import { ProfileIconComponent } from './shared/header-user/profile-icon/profile-icon.component';



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
    VDialogOverviewExampleDialogComponent,
    DeletePostDialog,
    DeleteTextPostDialog,
    DeleteVideoPostDialog,
    RegisterComponent,
    HeaderProfileBtnComponent,
    NewPostTextComponent,
    NewPostVideoComponent,
    NewPostImageComponent,
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
    DraftsComponent,
    ScheduledComponent,
    PublishedComponent,
    MyMembershipComponent,
    ActiveMembershipsComponent,
    BillingHistoryComponent,
    PaymentMethodsComponent,
    YourTiersComponent,
    BestPracticesComponent,
    ArtistIncomeComponent,
    ArtistIncomePayoutComponent,
    ArtistIncomePayoutTaxformComponent,
    ArtistPatronsExitSurveyComponent,
    ArtistPatronsBlockedUsersComponent,
    ArtistIncomeEarningsComponent,
    ArtistIncomePledgeGrowthComponent,
    ArtistProfileSettingsComponent,
    ArtistProfileSettingsEmailComponent,
    ArtistProfileSettingsUserProfileComponent,
    ArtistHomeComponent,
    ArtistHomeAllPostsComponent,
    ArtistHomePatronPostsComponent,
    HomePageHomeComponent,
    HomePagePricingComponent,
    UserPortalComponent,
    UserCheckoutComponent,
    UserFollowComponent,
    UserHomeComponent,
    UserHomeAllPostsComponent,
    UserHomeAwriaPostsComponent,
    UserMembershipsComponent,
    UserMessageComponent,
    UserMessageProfileComponent,
    UserProfileComponent,
    UserSettingComponent,
    UserProfileEmailComponent,
    UserProfileSettingComponent,
    UserMessageProfileAllComponent,
    UserMessageProfileReadComponent,
    UserMessageProfileUnreadComponent,
    HeaderUserComponent,
    ProfileIconComponent,
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
  ],
  entryComponents: [DialogOverviewExampleDialogComponent,
    VDialogOverviewExampleDialogComponent,
    DeletePostDialog,DeleteTextPostDialog,DeleteVideoPostDialog
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
