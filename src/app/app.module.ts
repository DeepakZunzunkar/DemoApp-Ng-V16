import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SubjectComponent } from './subject/subject.component';
import { AppComp1Component } from './subject/app-comp1/app-comp1.component';
import { AppComp2Component } from './subject/app-comp2/app-comp2.component';
import { AppComp3Component } from './subject/app-comp3/app-comp3.component';
import { AppComp4Component } from './subject/app-comp4/app-comp4.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LchildComponent } from './life-cycle/lchild/lchild.component';
import { TimelineComponent } from './life-cycle/timeline/timeline.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { TestDirectiveDirective } from './appdirective/test-directive.directive';
import { HostListnerBindingComponent } from './host-listner-binding/host-listner-binding.component';
import { TestHostLDirective } from './appdirective/test-host-ldirective.directive';
import { TestHostBDirective } from './appdirective/test-host-b.directive';
import { DropdownDirective } from './appdirective/dropdown.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DzPipe } from './app-pipe/dz.pipe';
import { dzSubString } from './app-pipe/dz-sub-string';
import { NameFilterPipe } from './app-pipe/name-filter.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { FormbxdDirective } from './appdirective/formbxd.directive';
import { FormbxdgreenDirective } from './appdirective/formbxdgreen.directive';
import { TempdFormComponent } from './forms/template-driven/tempd-form/tempd-form.component';
import { TempdForm1Component } from './forms/template-driven/tempd-form1/tempd-form1.component';
import { TempdForm2Component } from './forms/template-driven/tempd-form2/tempd-form2.component';
import { TempdForm3Component } from './forms/template-driven/tempd-form3/tempd-form3.component';
import { ReactForm1Component } from './forms/reactive/react-form1/react-form1.component';
import { ReactForm2Component } from './forms/reactive/react-form2/react-form2.component';
import { ReactForm3Component } from './forms/reactive/react-form3/react-form3.component';
import { ReactForm4Component } from './forms/reactive/react-form4/react-form4.component';
import { ReactForm5Component } from './forms/reactive/react-form5/react-form5.component';


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
    Child01Component,
    SubjectComponent,
    AppComp1Component,
    AppComp2Component,
    AppComp3Component,
    AppComp4Component,
    LifeCycleComponent,
    LchildComponent,
    TimelineComponent,
    ViewchildComponent,
    TestDirectiveDirective,
    HostListnerBindingComponent,
    TestHostLDirective,
    TestHostBDirective,
    DropdownDirective,
    PipesComponent,
    DzPipe,
    dzSubString,
    NameFilterPipe,
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    FormbxdDirective,
    FormbxdgreenDirective,
    TempdFormComponent,
    TempdForm1Component,
    TempdForm2Component,
    TempdForm3Component,
    ReactForm1Component,
    ReactForm2Component,
    ReactForm3Component,
    ReactForm4Component,
    ReactForm5Component,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
