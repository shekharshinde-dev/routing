import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { FairsComponent } from './fairs/fairs.component';
import { AdminComponent } from './admin/admin.component';

import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductsFormComponent } from './products-dashboard/products-form/products-form.component';
import { ProductsDetailsComponent } from './products-dashboard/products-details/products-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './shared/services/guard/auth.guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGaurd] },
  { path: '', component: AuthComponent },
  {
    path: 'users', component: UsersComponent, title: 'users',
    canActivateChild: [AuthGaurd], children: [
      { path: 'addUser', component: UserFormComponent },
      { path: ':userId', component: UserDetailsComponent },
      { path: ':userId/edit', component: UserFormComponent },
    ]
  },
  // { path: 'users/addUser', component: UserFormComponent },
  // { path: 'users/:userId', component: UserDetailsComponent },
  // { path: 'users/:userId/edit', component: UserFormComponent },
  {
    path: 'products', canActivate: [AuthGaurd],children: [
      { path: '', component: ProductsDashboardComponent,},
      { path: 'addProduct', component: ProductsFormComponent },
      { path: ':id', component: ProductsDetailsComponent },
      { path: ':id/edit', component: ProductsFormComponent },

    ]
  },
  // { path: 'products/addProduct', component: ProductsFormComponent },
  // { path: 'products/:id', component: ProductsDetailsComponent },
  // { path: 'products/:id/edit', component: ProductsFormComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGaurd] },
  { path: 'fairs', component: FairsComponent, canActivate: [AuthGaurd] },
  { path: 'page-not-found', title: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
