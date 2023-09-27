import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.active') clasName=false;
  
  @HostListener("click") myClick(){
    this.clasName = !this.clasName;
  }

}
