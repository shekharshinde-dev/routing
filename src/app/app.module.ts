import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FairsComponent } from './fairs/fairs.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './shared/Module/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonComponent } from './back-button/back-button.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductsDetailsComponent } from './products-dashboard/products-details/products-details.component';
import { ProductsFormComponent } from './products-dashboard/products-form/products-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    FairsComponent,
    AdminComponent,
    UserDetailsComponent,
    UserFormComponent,
    BackButtonComponent,
    GetConfirmComponent,
    ProductsDashboardComponent,
    ProductsDetailsComponent,
    ProductsFormComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
