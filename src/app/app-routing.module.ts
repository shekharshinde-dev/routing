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
import { AuthGuard } from './shared/services/guard/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { UserRoleGuard } from './shared/services/guard/userRole.guard';
import { CanDeactivateGuard } from './shared/services/guard/can-deactivate.guard';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: '', component: AuthComponent },
  {
    path: 'users', component: UsersComponent, title: 'users',
    canActivateChild: [AuthGuard,UserRoleGuard], data : {
      userRole : ['admin','superAdmin']
    },
     children: [
      { path: 'addUser', component: UserFormComponent },
      { path: ':userId', component: UserDetailsComponent },
      { path: ':userId/edit', component: UserFormComponent,canDeactivate : [CanDeactivateGuard] },
    ]
  },
  // { path: 'users/addUser', component: UserFormComponent },
  // { path: 'users/:userId', component: UserDetailsComponent },
  // { path: 'users/:userId/edit', component: UserFormComponent },
  {
    path: 'products', canActivate: [AuthGuard,UserRoleGuard], data : {
      userRole : ['buyer','admin','superAdmin']
    },
    children: [
      { path: '', component: ProductsDashboardComponent,},
      { path: 'addProduct', component: ProductsFormComponent },
      { path: ':id', component: ProductsDetailsComponent },
      { path: ':id/edit', component: ProductsFormComponent },

    ]
  },
  // { path: 'products/addProduct', component: ProductsFormComponent },
  // { path: 'products/:id', component: ProductsDetailsComponent },
  // { path: 'products/:id/edit', component: ProductsFormComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard,UserRoleGuard], data:{
     userRole : ['admin','superAdmin']
  } },
  { path: 'fairs', component: FairsComponent, canActivate: [AuthGuard,UserRoleGuard],data : {
     userRole : ['superAdmin']
  } },
  { path: 'page-not-found', title: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
