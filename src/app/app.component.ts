import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  title = 'Wlecome to Demo App - Angular v16';
  currentDateTime: Date = new Date();

  @ViewChild('staticTabs', { static: false })
  staticTabs?: TabsetComponent;

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {
    this.selectTab(3);
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

}
