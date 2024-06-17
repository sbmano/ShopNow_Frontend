import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminscreenRoutingModule } from './adminscreen-routing.module';
import { AdminscreenComponent } from './adminscreen.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';

@NgModule({
  declarations: [
    AdminscreenComponent,
    AddproductComponent,
    UserdetailsComponent,
    ViewallproductsComponent
  ],
  imports: [
    CommonModule,
    AdminscreenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class AdminscreenModule { }
