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

import { ArtistProfileEmailsettingsComponent } from './artist-portal/artist-profile/artist-profile-emailsettings/artist-profile-emailsettings.component';
import { ArtistProfileUserprofileComponent } from './artist-portal/artist-profile/artist-profile-userprofile/artist-profile-userprofile.component';
import { HomeComponent } from './home-page/home/home.component';
import { PricingComponent } from './home-page/pricing/pricing.component';
import { ArtistIncomeComponent } from './artist-portal/artist-income/artist-income.component';
import { ArtistPayoutComponent } from './artist-portal/artist-income/artist-payout/artist-payout.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home-page'
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
        path: 'pricing',
        component: PricingComponent,
      },
    ]
  },
  {
    path: 'artist-portal',
    component: ArtistPortalComponent,
    children: [
      {
        path: 'posts',
        component: ArtistPostsComponent,
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
          }
        ]
      },
      {
        path: 'message',
        component: ArtistMessageComponent,
        children: [
          {
            path: 'page',
            component: ArtistMessagePageComponent,
            children: [
              {
                path: 'all',
                component: ArtistMessageAllComponent
              },
              {
                path: 'unread',
                component: ArtistMessageUnreadComponent
              },
              {
                path: 'read',
                component: ArtistMessageReadComponent
              },
            ]
          },
          {
            path: 'profile',
            component: ArtistMessageProfileComponent,
            children: [
              {
                path: 'all',
                component: ArtistMessageProfileAllComponent
              },
              {
                path: 'unread',
                component: ArtistMessageProfileUnreadComponent
              },
              {
                path: 'read',
                component: ArtistMessageProfileReadComponent
              },
            ]
          },
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
            component: ArtistEditTiersComponent
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
          }
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }