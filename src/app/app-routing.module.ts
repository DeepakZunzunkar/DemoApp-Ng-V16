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
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HostListnerBindingComponent } from './host-listner-binding/host-listner-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { TempdFormComponent } from './forms/template-driven/tempd-form/tempd-form.component';
import { TempdForm1Component } from './forms/template-driven/tempd-form1/tempd-form1.component';
import { TempdForm2Component } from './forms/template-driven/tempd-form2/tempd-form2.component';
import { TempdForm3Component } from './forms/template-driven/tempd-form3/tempd-form3.component';
import { ReactForm1Component } from './forms/reactive/react-form1/react-form1.component';
import { ReactForm2Component } from './forms/reactive/react-form2/react-form2.component';
import { ReactForm3Component } from './forms/reactive/react-form3/react-form3.component';
import { ReactForm4Component } from './forms/reactive/react-form4/react-form4.component';
import { ReactForm5Component } from './forms/reactive/react-form5/react-form5.component';


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
  { path: "viewchild",component: ViewchildComponent },
  { path: "hostlb",component: HostListnerBindingComponent },
  { path: "pipes",component: PipesComponent },
  { path: "forms",component: FormsComponent },
  { path: "tempdform",component: TempdFormComponent },
  { path: "tempdform1",component: TempdForm1Component },
  { path: "tempdform2",component: TempdForm2Component },
  { path: "tempdform3",component: TempdForm3Component },
  { path: "reactform1",component: ReactForm1Component },
  { path: "reactform2",component: ReactForm2Component },
  { path: "reactform3",component: ReactForm3Component },
  { path: "reactform4",component: ReactForm4Component },
  { path: "reactform5",component: ReactForm5Component },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
