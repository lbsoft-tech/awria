import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/dashboard/posts/posts.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PayoutsComponent } from './pages/dashboard/income/payouts/payouts.component'
import { PaymentsComponent } from './pages/dashboard/income//payments/payments.component'
import { RefundsComponent } from './pages/dashboard/income/refunds/refunds.component'
import { VatComponent } from './pages/dashboard/income/vat/vat.component'

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  pathMatch: 'full'
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
