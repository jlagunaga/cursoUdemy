import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector: 'videoJuegos',
    templateUrl: './videojuego.components.html'

})
export class videoJuegosComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'titulos de videojuegos';
        console.log('se cargo el componente desde angular');
    }

    // ngOnInit() se ejecuta al cargar el componente
    ngOnInit() {
        console.log("evento onInit cargado");
    }

    // ngDoCheck() se ejecuta cuando hay un cambio 
    ngDoCheck() {
        console.log("evento doChekc Ejecutado");
    }

    // ngOnDestroy() se ejecuta cuando se descruye el componente
    ngOnDestroy() {
        console.log("evento onDestroy ajecutado");
    }
    cambiaTitulo() {
        this.titulo = 'Titulo de Actualizados ';
    }

}