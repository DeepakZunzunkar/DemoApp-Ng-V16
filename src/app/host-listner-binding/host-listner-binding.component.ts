import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-host-listner-binding',
  templateUrl: './host-listner-binding.component.html',
  styleUrls: ['./host-listner-binding.component.css']
})
export class HostListnerBindingComponent implements OnInit{

    mypro1:boolean=false;

    ngOnInit(): void {
        // var num=0;
        $(window).scroll(function(){
            console.log("window scrolling...");
            // num=num+1;
            // console.log(num);
        });
    }

    //to use hostlistner we can create event at component
    // @HostListener('click') myClick(){
    //     alert("clicked on host element ");
    // }

    @HostListener('mouseover') mouseOver(){
      this.mypro1=true;
    }

    @HostListener('mouseleave') mouseleave(){
      this.mypro1=false;
    }

    @HostListener("window:scroll",["$event"]) scrollEvmt(){
      console.log("scrolling...");
    }

    
}
