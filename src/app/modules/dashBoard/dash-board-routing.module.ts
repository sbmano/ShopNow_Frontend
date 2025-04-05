import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MycartComponent } from './mycart/mycart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
  {path:'',
   component:DashboardComponent,
   children:[
    {
      path: 'myaccount',   
      component: MyaccountComponent,
    },
    {
      path: 'myorders',   
      component: MyordersComponent,
    },
    {
      path: 'mycart',   
      component: MycartComponent,
    },
    {
      path: 'homepage',   
      component: HomepageComponent,
    },
    {
      path: 'viewproduct',   
      component: ViewproductComponent,
    },
    {
      path: 'searchresult',   
      component: SearchresultComponent,
    },
    { 
      path: 'adminscreens', 
      //canActivate:[AuthGuard],
      loadChildren:()=>
      import('../adminScreen/adminscreen.module').then((m)=>m.AdminscreenModule),
    },
    { 
      path: '', 
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    { 
      path: '**', 
      redirectTo:'dashboard',
      pathMatch:'full'
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
