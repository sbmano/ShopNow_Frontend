import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminscreenComponent } from './adminscreen.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';

const routes: Routes = [
  {path:'',
   component:AdminscreenComponent,
   children:[
    {
      path: 'addproduct',   
      component: AddproductComponent,
    },
    {
      path: 'userdetails',   
      component: UserdetailsComponent,
    },
    {
      path: 'viewallproducts',   
      component: ViewallproductsComponent,
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
export class AdminscreenRoutingModule { }
