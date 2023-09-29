import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dz'
})
export class DzPipe implements PipeTransform {

  transform(value:string,limit:number) {
    // console.log(value);
    // console.log(args);

    if(value.length > limit){
      return value.substr(0,limit)+' .....';
    }else{
      return value;
    }

  }

}


