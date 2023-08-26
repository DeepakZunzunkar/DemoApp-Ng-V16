import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing-basics/home/home.component';
import { AboutComponent } from './routing-basics/about/about.component';
import { ProductComponent } from './routing-basics/product/product.component';
import { ContactComponent } from './routing-basics/contact/contact.component';
import { AppLoginComponent } from './routing-basics/app-login/app-login.component';
import { PageNotFoundComponent } from './routing-basics/page-not-found/page-not-found.component';
import { HeadphoneComponent } from './routing-basics/product/headphone/headphone.component';
import { SmartwatchComponent } from './routing-basics/product/smartwatch/smartwatch.component';
import { IphoneComponent } from './routing-basics/product/iphone/iphone.component';
import { SunglassComponent } from './routing-basics/product/sunglass/sunglass.component';

const routes: Routes = [

  { path:"", redirectTo:'login',pathMatch:'full'},
  { path:"home", component: HomeComponent },
  { path:"login", component: AppLoginComponent },
  { path:"about", component: AboutComponent },
  { path:"contact", component: ContactComponent },
  { path:"product", component:ProductComponent, 
        
    children:[
      // { path:'' , component: ProductComponent},
      { path:'headphone' , component: HeadphoneComponent},
      { path:'smartwatch' , component: SmartwatchComponent},
      { path:'iphone' , component: IphoneComponent},
      { path:'sunglass' , component: SunglassComponent}
    ]
  },
  { path:"pageNotFound", component: PageNotFoundComponent },
  // wild card routes and it should always keep at the end of array routes
  { path:"**", component: PageNotFoundComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
