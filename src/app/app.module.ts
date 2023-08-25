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
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
