import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()anchura:number;
  @Output() conseguirAutor= new EventEmitter(); // evento para enviar datos poutput
  public autor:any;

  constructor() { 
    this.autor={
      nombre:'Joseph Laguna',
      website:'JLaguna.com.pe',
      youtub:'Joseoh Laguna Dev'
    }
  }

  ngOnInit(): void {
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    });
  }

lanzarEvento(event){
console.log(event);
this.conseguirAutor.emit(this.autor);// utilizamos el evento emmit para devolver datos 

}


}// /// fin de clase 
