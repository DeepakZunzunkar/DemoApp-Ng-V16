import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { BannerComponent } from './my-container/banner/banner.component';
import { TxtSec1Component } from './my-container/txt-sec1/txt-sec1.component';
import { TxtSec2Component } from './my-container/txt-sec2/txt-sec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleBindingComponent } from './databind/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './databind/event-binding/event-binding.component';
import { TwoDataBindingComponent } from './databind/two-data-binding/two-data-binding.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';
import { HomeComponent } from './routing-basics/home/home.component';
import { AboutComponent } from './routing-basics/about/about.component';
import { ContactComponent } from './routing-basics/contact/contact.component';
import { ProductComponent } from './routing-basics/product/product.component';
import { AppLoginComponent } from './routing-basics/app-login/app-login.component';
import { PageNotFoundComponent } from './routing-basics/page-not-found/page-not-found.component';
import { HeadphoneComponent } from './routing-basics/product/headphone/headphone.component';
import { SmartwatchComponent } from './routing-basics/product/smartwatch/smartwatch.component';
import { IphoneComponent } from './routing-basics/product/iphone/iphone.component';
import { SunglassComponent } from './routing-basics/product/sunglass/sunglass.component';
import { NgcontenttComponent } from './ngcontentt/ngcontentt.component';
import { CommonComponent } from './ngcontentt/common/common.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { DesignUtilityService } from './services/design-utility.service';
import { ServiceTestComponent } from './service-test/service-test.component';
import { CardsComponent } from './service-test/cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Child01Component } from './exercise01/child01/child01.component';



@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    BannerComponent,
    TxtSec1Component,
    TxtSec2Component,
    DatabindComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoDataBindingComponent,
    DirectivesDemoComponent,
    RoutingBasicsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    AppLoginComponent,
    PageNotFoundComponent,
    HeadphoneComponent,
    SmartwatchComponent,
    IphoneComponent,
    SunglassComponent,
    NgcontenttComponent,
    CommonComponent,
    ParentComponent,
    Child1Component,
    ServiceTestComponent,
    CardsComponent,
    HeaderComponent,
    MyHomeComponent,
    Exercise01Component,
    Child01Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
