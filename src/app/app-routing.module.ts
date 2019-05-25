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
import { NewPostTextComponent } from './artist-portal/artist-posts/new-posts/new-post-text/new-post-text.component';
import { NewPostVideoComponent } from './artist-portal/artist-posts/new-posts/new-post-video/new-post-video.component';
import { NewPostImageComponent } from './artist-portal/artist-posts/new-posts/new-post-image/new-post-image.component';
import { ArtistProfileComponent } from './artist-portal/artist-profile/artist-profile.component';
import { ArtistNotificationsComponent } from './artist-portal/artist-notifications/artist-notifications.component';
import { ArtistProfileOverviewComponent } from './artist-portal/artist-profile/artist-profile-overview/artist-profile-overview.component';
import { ArtistProfilePostsComponent } from './artist-portal/artist-profile/artist-profile-posts/artist-profile-posts.component';
import { ArtistPatronsComponent } from './artist-portal/artist-patrons/artist-patrons.component';
import { ArtistPatronsRelationshipComponent } from './artist-portal/artist-patrons/artist-patrons-relationship/artist-patrons-relationship.component';




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
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
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
        path: 'profile',
        component: ArtistProfileComponent,
        children: [
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
