import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { FairsComponent } from './fairs/fairs.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './shared/Module/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonComponent } from './back-button/back-button.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    AdminComponent,
    UserDetailsComponent,
    UserFormComponent,
    BackButtonComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
