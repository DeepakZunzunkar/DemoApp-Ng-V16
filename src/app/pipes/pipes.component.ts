import { Component } from '@angular/core';

@Component({
  selector: 'pipe-comps',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  header:string="Pipes";
  description:string="it is one of the feuture of Angular using which we can transform output data in template."
  date:Date=new Date();

  header1:string="Custome Pipe";
  description1:string="custom pipe is required to transform the output as per our requirement"

}
