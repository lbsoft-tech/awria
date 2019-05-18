import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/dashboard/posts/posts.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PayoutsComponent } from './pages/dashboard/income/payouts/payouts.component'
import { PaymentsComponent } from './pages/dashboard/income//payments/payments.component'
import { RefundsComponent } from './pages/dashboard/income/refunds/refunds.component'
import { LoginComponent } from './pages/login/login.component'
import { VatComponent } from './pages/dashboard/income/vat/vat.component';
import { EditComponent } from './pages/dashboard/edit/edit.component'
import { Demo1Component } from './pages/dashboard/edit/demo1/demo1.component'
import { AboutComponent } from './pages/dashboard/edit/about/about.component'
import { TiersComponent } from './pages/dashboard/edit/tiers/tiers.component'
import { GoalsComponent } from './pages/dashboard/edit/goals/goals.component'
import { ThanksComponent } from './pages/dashboard/edit/thanks/thanks.component'
import { PaymentstabComponent } from './pages/dashboard/edit/paymentstab/paymentstab.component'
import { PoststabComponent } from './pages/dashboard/edit/poststab/poststab.component'
import { OffersComponent } from './pages/dashboard/edit/offers/offers.component'
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  pathMatch: 'full'
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
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'posts',
  component: PostsComponent
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
}
  ,
{
  path: 'edit',
  component: EditComponent,
  children: [
    {
      path: 'demo1',
      component: Demo1Component
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'tiers',
      component: TiersComponent
    },
    {
      path: 'goals',
      component: GoalsComponent
    },
    {
      path: 'thanks',
      component: ThanksComponent
    },
    {
      path: 'paymentstabs',
      component: PaymentstabComponent
    },

    {
      path: 'poststab',
      component: PoststabComponent
    },

    {
      path: 'offers',
      component: OffersComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
