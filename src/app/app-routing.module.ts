import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistPortalComponent } from './artist-portal/artist-portal.component';
import { ArtistPostsComponent } from './artist-portal/artist-posts/artist-posts.component';
import { NewPostsComponent } from './artist-portal/artist-posts/new-posts/new-posts.component';
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
import { ArtistMessageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-all/artist-message-all.component';
import { ArtistMessageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-unread/artist-message-unread.component';
import { ArtistMessageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-read/artist-message-read.component';
import { NewPostTextComponent } from './artist-portal/artist-posts/new-posts/new-post-text/new-post-text.component';
import { NewPostVideoComponent } from './artist-portal/artist-posts/new-posts/new-post-video/new-post-video.component';
import { NewPostImageComponent } from './artist-portal/artist-posts/new-posts/new-post-image/new-post-image.component';

import { ArtistSettingsComponent } from './artist-portal/artist-settings/artist-settings.component';
import { ArtistSettingsAccountComponent } from './artist-portal/artist-settings/artist-settings-account/artist-settings-account.component';
import { ArtistSettingsTeamComponent } from './artist-portal/artist-settings/artist-settings-team/artist-settings-team.component';
import { ArtistSettingsAppsComponent } from './artist-portal/artist-settings/artist-settings-apps/artist-settings-apps.component';
import { ArtistSettingsYouremailsettingsComponent } from './artist-portal/artist-settings/artist-settings-youremailsettings/artist-settings-youremailsettings.component';
import { ArtistProfileComponent } from './artist-portal/artist-profile/artist-profile.component';
import { ArtistNotificationsComponent } from './artist-portal/artist-notifications/artist-notifications.component';
import { ArtistProfileOverviewComponent } from './artist-portal/artist-profile/artist-profile-overview/artist-profile-overview.component';
import { ArtistProfilePostsComponent } from './artist-portal/artist-profile/artist-profile-posts/artist-profile-posts.component';
import { ArtistPatronsComponent } from './artist-portal/artist-patrons/artist-patrons.component';
import { ArtistPatronsRelationshipComponent } from './artist-portal/artist-patrons/artist-patrons-relationship/artist-patrons-relationship.component';
import { ArtistMessageComponent } from './artist-portal/artist-message/artist-message.component';
import { ArtistMessageProfileComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile.component';
import { ArtistMessageProfileAllComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-all/artist-message-profile-all.component';
import { ArtistMessageProfileReadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-read/artist-message-profile-read.component';
import { ArtistMessageProfileUnreadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-unread/artist-message-profile-unread.component';
import { ArtistMessagePageComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page.component';
import { ArtistMessagePageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-all/artist-message-page-all.component';
import { ArtistMessagePageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-read/artist-message-page-read.component';
import { ArtistMessagePageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page-unread/artist-message-page-unread.component';
import { DraftsComponent } from './artist-portal/artist-posts/drafts/drafts.component';
import { ScheduledComponent } from './artist-portal/artist-posts/scheduled/scheduled.component';
import { PublishedComponent } from './artist-portal/artist-posts/published/published.component';
import { MyMembershipComponent } from './my-membership/my-membership.component';
import { ActiveMembershipsComponent } from './my-membership/active-memberships/active-memberships.component';
import { BillingHistoryComponent } from './my-membership/billing-history/billing-history.component';
import { PaymentMethodsComponent } from './my-membership/payment-methods/payment-methods.component';
import { YourTiersComponent } from './artist-portal/artist-edit/artist-edit-tiers/your-tiers/your-tiers.component';
import { BestPracticesComponent } from './artist-portal/artist-edit/artist-edit-tiers/best-practices/best-practices.component';
import { ArtistIncomePayoutComponent } from './artist-portal/artist-income/artist-income-payout/artist-income-payout.component';
import { ArtistIncomePayoutTaxformComponent } from './artist-portal/artist-income/artist-income-payout/artist-income-payout-taxform/artist-income-payout-taxform.component';
import { ArtistPatronsExitSurveyComponent } from './artist-portal/artist-patrons/artist-patrons-exit-survey/artist-patrons-exit-survey.component';
import { ArtistPatronsBlockedUsersComponent } from './artist-portal/artist-patrons/artist-patrons-blocked-users/artist-patrons-blocked-users.component';
import { ArtistIncomeEarningsComponent } from './artist-portal/artist-income/artist-income-earnings/artist-income-earnings.component';
import { ArtistIncomePledgeGrowthComponent } from './artist-portal/artist-income/artist-income-pledge-growth/artist-income-pledge-growth.component';
import { ArtistProfileSettingsComponent } from './artist-portal/artist-profile-settings/artist-profile-settings.component';
import { ArtistProfileSettingsUserProfileComponent } from './artist-portal/artist-profile-settings/artist-profile-settings-user-profile/artist-profile-settings-user-profile.component';
import { ArtistProfileSettingsEmailComponent } from './artist-portal/artist-profile-settings/artist-profile-settings-email/artist-profile-settings-email.component';
import { ArtistHomeComponent } from './artist-portal/artist-home/artist-home.component';
import { ArtistHomeAllPostsComponent } from './artist-portal/artist-home/artist-home-all-posts/artist-home-all-posts.component';
import { ArtistHomePatronPostsComponent } from './artist-portal/artist-home/artist-home-patron-posts/artist-home-patron-posts.component';
import { HomePageHomeComponent } from './home-page/home-page-home/home-page-home.component';
import { AuthGuard } from './_guards/authguard/auth.guard';
import { RoleGuard } from './_guards/roleguard/role.guard';

import { ArtistProfileEmailsettingsComponent } from './artist-portal/artist-profile/artist-profile-emailsettings/artist-profile-emailsettings.component';
import { ArtistProfileUserprofileComponent } from './artist-portal/artist-profile/artist-profile-userprofile/artist-profile-userprofile.component';
import { HomeComponent } from './home-page/home/home.component';
import { PricingComponent } from './home-page/pricing/pricing.component';
import { ArtistIncomeComponent } from './artist-portal/artist-income/artist-income.component';
import { ArtistPayoutComponent } from './artist-portal/artist-income/artist-payout/artist-payout.component';
import { ArtistHomeAllpostComponent } from './artist-portal/artist-home/artist-home-allpost/artist-home-allpost.component';
import { ArtistHomePatrononlypostComponent } from './artist-portal/artist-home/artist-home-patrononlypost/artist-home-patrononlypost.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home-page/home'
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'home',
        component: HomePageHomeComponent
      }
    ]
  },
  {
    path: 'my-membership',
    component: MyMembershipComponent,
    children: [
      {
        path: 'active-memberships',
        component: ActiveMembershipsComponent
      },
      {
        path: 'billing-history',
        component: BillingHistoryComponent
      },
      {
        path: 'payment-methods',
        component: PaymentMethodsComponent
      }
    ]
  },
  {
    path: 'artist-portal',
    component: ArtistPortalComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        component: ArtistPostsComponent,
        // canActivate: [RoleGuard],
        // data: { role: 'Artist' },
        children: [
          {
            path: 'new',
            component: NewPostsComponent
          },
          {
            path: 'text',
            component: NewPostTextComponent
          },
          {
            path: 'video',
            component: NewPostVideoComponent
          },
          {
            path: 'image',
            component: NewPostImageComponent
          },
          {
            path: 'drafts',
            component: DraftsComponent
          },
          {
            path: 'scheduled',
            component: ScheduledComponent
          },
          {
            path: 'published',
            component: PublishedComponent
          }
        ]
      },
      {
        path: 'home',
        component: ArtistHomeComponent,
        children: [
          {
            path: 'all',
            component: ArtistHomeAllPostsComponent
          },
          {
            path: 'patron',
            component: ArtistHomePatronPostsComponent
          }
        ]
      },
      {
        path: 'profile-settings',
        component: ArtistProfileSettingsComponent,
        children: [
          {
            path: 'my-profile',
            component: ArtistProfileSettingsUserProfileComponent
          },
          {
            path: 'my-email',
            component: ArtistProfileSettingsEmailComponent
          }
        ]


      },

      {
        path: 'edit',
        component: ArtistEditComponent,
        children: [
          {
            path: 'about',
            component: ArtistEditAboutComponent
          },
          {
            path: 'tiers',
            component: ArtistEditTiersComponent,
            children: [
              {
                path: 'your-tiers',
                component: YourTiersComponent
              },
              {
                path: 'best-practices',
                component: BestPracticesComponent
              }
            ]
          },
          {
            path: 'goals',
            component: ArtistEditGoalComponent
          },
          {
            path: 'thanks',
            component: ArtistEditThanksComponent
          },
          {
            path: 'paymentstabs',
            component: ArtistEditPaymentstabsComponent
          },

          {
            path: 'poststab',
            component: ArtistEditPoststabComponent
          },

          {
            path: 'offers',
            component: ArtistEditOffersComponent
          },
        ]
      },
      {
        path: 'setting',
        component: ArtistSettingsComponent,
        children: [
          {
            path: 'setting-account',
            component: ArtistSettingsAccountComponent,
          },
          {
            path: 'setting-team',
            component: ArtistSettingsTeamComponent
          },
          {
            path: 'setting-apps',
            component: ArtistSettingsAppsComponent
          },
          {
            path: 'setting-email-setting',
            component: ArtistSettingsYouremailsettingsComponent
          }
        ]
      },
      {
        path: 'profile',
        component: ArtistProfileComponent,
        children: [
          {
            path: 'user-profile',
            component: ArtistProfileUserprofileComponent,
          },
          {
            path: 'email-settings',
            component: ArtistProfileEmailsettingsComponent,
          },
          {
            path: 'overview',
            component: ArtistProfileOverviewComponent
          },
          {
            path: 'posts',
            component: ArtistProfilePostsComponent
          },
        ]
      },
      {
        path: 'patron',
        component: ArtistPatronsComponent,
        children: [
          {
            path: 'relationship',
            component: ArtistPatronsRelationshipComponent
          },
          {
            path: 'exit-survey',
            component: ArtistPatronsExitSurveyComponent
          },
          {
            path: 'blocked-users',
            component: ArtistPatronsBlockedUsersComponent
          },
        ]
      },
      {
        path: 'income',
        component: ArtistIncomeComponent,
        children: [
          {
            path: 'payout',
            component: ArtistPayoutComponent
          }
        ]
      },
      {
        path: 'message',
        component: ArtistMessageComponent,
        children: [
          {
            path: 'profile',
            component: ArtistMessageProfileComponent,
            children: [
              {
                path: 'all',
                component: ArtistMessageProfileAllComponent
              },
              {
                path: 'read',
                component: ArtistMessageProfileReadComponent
              },
              {
                path: 'unread',
                component: ArtistMessageProfileUnreadComponent
              }
            ]
          },
          {
            path: 'page',
            component: ArtistMessagePageComponent,
            children: [
              {
                path: 'all',
                component: ArtistMessagePageAllComponent
              },
              {
                path: 'read',
                component: ArtistMessagePageReadComponent
              },
              {
                path: 'unread',
                component: ArtistMessagePageUnreadComponent
              }
            ]
          }
        ]
      },
      {
        path: 'notifications',
        component: ArtistNotificationsComponent
      },
      {
        path: 'income',
        component: ArtistIncomeComponent,
        children: [
          {
            path: 'payout',
            component: ArtistIncomePayoutComponent
          },
          {
            path: 'payout/tax-form',
            component: ArtistIncomePayoutTaxformComponent
          },
          {
            path: 'earnings',
            component: ArtistIncomeEarningsComponent
          },
          {
            path: 'pledge-growth',
            component: ArtistIncomePledgeGrowthComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }