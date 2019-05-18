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
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';





const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  pathMatch: 'full'
},
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }