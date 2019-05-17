import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/dashboard/posts/posts.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PayoutsComponent } from './pages/dashboard/income/payouts/payouts.component';
import { PaymentsComponent } from './pages/dashboard/income//payments/payments.component';
import { RefundsComponent } from './pages/dashboard/income/refunds/refunds.component';
import { VatComponent } from './pages/dashboard/income/vat/vat.component';
import { EditComponent } from './pages/dashboard/edit/edit.component';
import { Demo1Component } from './pages/dashboard/edit/demo1/demo1.component';
import { AboutComponent } from './pages/dashboard/edit/about/about.component';
import { TiersComponent } from './pages/dashboard/edit/tiers/tiers.component';
import { GoalsComponent } from './pages/dashboard/edit/goals/goals.component';
import { ThanksComponent } from './pages/dashboard/edit/thanks/thanks.component';
import { PaymentstabComponent } from './pages/dashboard/edit/paymentstab/paymentstab.component';
import { PoststabComponent } from './pages/dashboard/edit/poststab/poststab.component';
import { OffersComponent } from './pages/dashboard/edit/offers/offers.component';
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





const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  pathMatch: 'full'
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
},
{
  path: 'payouts',
  component: PayoutsComponent
}
  ,
{
  path: 'payments',
  component: PaymentsComponent
}
  ,
{
  path: 'refunds',
  component: RefundsComponent
}
  ,
{
  path: 'vat',
  component: VatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
