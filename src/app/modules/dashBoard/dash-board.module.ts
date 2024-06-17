import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MycartComponent } from './mycart/mycart.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderModule  } from 'angular-image-slider';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyaccountComponent,
    MyordersComponent,
    MycartComponent,
    HomepageComponent,
    ViewproductComponent,
    SearchresultComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    SliderModule
  ]
})
export class DashBoardModule { }
