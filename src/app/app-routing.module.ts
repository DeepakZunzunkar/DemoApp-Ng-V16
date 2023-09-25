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
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';
import { NgcontenttComponent } from './ngcontentt/ngcontentt.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { Exercise01Component } from './exercise01/exercise01.component';
import { SubjectComponent } from './subject/subject.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';


const routes: Routes = [

  // phase 1 

  // { path:"", redirectTo:'login',pathMatch:'full'},
  // { path:"home", component: HomeComponent },
  // { path:"login", component: AppLoginComponent },
  // { path:"about", component: AboutComponent },
  // { path:"contact", component: ContactComponent },
  // { path:"product", component:ProductComponent, 

  //   children:[
  //     // { path:'' , component: ProductComponent},
  //     { path:'headphone' , component: HeadphoneComponent},
  //     { path:'smartwatch' , component: SmartwatchComponent},
  //     { path:'iphone' , component: IphoneComponent},
  //     { path:'sunglass' , component: SunglassComponent}
  //   ]
  // },
  // { path:"pageNotFound", component: PageNotFoundComponent },
  // // wild card routes and it should always keep at the end of array routes
  // { path:"**", component: PageNotFoundComponent }  

  // phase 2

  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "home", component: MyHomeComponent },
  { path: "login", component: AppLoginComponent },
  { path: "cmp-basics", component: MyContainerComponent },
  { path: "data-binding", component: DatabindComponent },
  { path: "directive-basics", component: DirectivesDemoComponent },
  {
    path: "routin-basics", component: RoutingBasicsComponent,
    children: [
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      { path: "home", component: HomeComponent },
      { path: "login", component: AppLoginComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      {
        path: "product", component: ProductComponent,
        children: [
          // { path: '', component: ProductComponent },
          { path: 'headphone', component: HeadphoneComponent },
          { path: 'smartwatch', component: SmartwatchComponent },
          { path: 'iphone', component: IphoneComponent },
          { path: 'sunglass', component: SunglassComponent }
        ]
      },
      { path:"pageNotFound", component: PageNotFoundComponent },
    ]
  },
  { path: "ng-content", component: NgcontenttComponent },
  { path: "cmp-commn", component: ParentComponent },
  { path: "service-test",component: ServiceTestComponent },
  { path: "exercise01",component: Exercise01Component },
  { path: "subject",component: SubjectComponent },
  { path: "lifecycle",component: LifeCycleComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
