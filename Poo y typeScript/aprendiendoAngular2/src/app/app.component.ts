import { Component } from '@angular/core';
import { Configuracion } from './configuracion/configuracion';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master en Angular';

  public mostrarVideojuegos: boolean = false;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = this.config.titulo;

  }

  public ocultarVideoJuegos(valor: boolean) {
    this.mostrarVideojuegos = valor;
  }

}// fin de clase



