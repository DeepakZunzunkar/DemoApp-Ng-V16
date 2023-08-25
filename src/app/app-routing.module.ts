import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing-basics/home/home.component';
import { AboutComponent } from './routing-basics/about/about.component';
import { ProductComponent } from './routing-basics/product/product.component';
import { ContactComponent } from './routing-basics/contact/contact.component';
import { AppLoginComponent } from './routing-basics/app-login/app-login.component';

const routes: Routes = [

  { path:"", redirectTo:'login',pathMatch:'full'},
  { path:"home", component: HomeComponent },
  { path:"login", component: AppLoginComponent },
  { path:"about", component: AboutComponent },
  { path:"contact", component: ContactComponent },
  { path:"product", component: ProductComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
