import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
public elemento:any;
  constructor(
    public el: ElementRef
  ) {
     this.elemento = this.el.nativeElement;
     this.elemento.style.background = "blue";
     this.elemento.style.padding = "20px";
     this.elemento.style.color = "white";
     this.elemento.style.margin = "20px";
     this.elemento.innerText = this.elemento.innerText + 'no quiero' ;
  }
  ngOnInit() {


    
    

  }

}// fin de clase 
