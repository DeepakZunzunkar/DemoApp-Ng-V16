import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any,searchTerm:any): any {

    if(value.length === 0){
      return value;
    }

    if(searchTerm ==='' || searchTerm ===undefined){
      return value;
    }
    return value.filter(function(search:any){
      // console.log(search.name.indexOf(searchTerm));
        // return search.name.indexOf(searchTerm) > -1;
        return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
