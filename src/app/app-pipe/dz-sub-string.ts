import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'dzsubstring'
})
export class dzSubString implements PipeTransform {

  transform(value:string, ...args: unknown[]) {
    // console.log(value);
    // console.log(args);
    return value.substr(0,40)+' .....';
  }

}