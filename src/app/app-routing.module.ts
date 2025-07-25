import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { FairsComponent } from './fairs/fairs.component';
import { AdminComponent } from './admin/admin.component';

import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/addUser', component: UserFormComponent },
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: 'users/:userId/edit', component: UserFormComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'fairs', component: FairsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
