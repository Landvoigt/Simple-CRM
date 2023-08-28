import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { headerText: 'Dashboard' } },
  { path: 'user', component: UserComponent, data: { headerText: 'User' } },
  { path: 'user/:id', component: UserDetailComponent, data: { headerText: 'User Details' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
