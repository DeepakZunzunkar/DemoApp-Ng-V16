import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  templateDrivenNotes:any[]=[];
  reactiveNotes:any[]=[];


  
  ngOnInit(): void {

    this.templateDrivenNotes=["Simple basic form","Easy to start","Based on temlate(HTML)"];
    this.reactiveNotes=["Complex forms with greater control","we defines structure of forms in TS","Based on type script (.tx file)"];
  }
  
}
