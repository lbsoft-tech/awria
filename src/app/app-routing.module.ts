import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/dashboard/posts/posts.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
