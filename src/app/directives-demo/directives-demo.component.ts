import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent {

  blockStatus:boolean=false;


  onBlockCreate(){
    this.blockStatus=true;
  }

}
