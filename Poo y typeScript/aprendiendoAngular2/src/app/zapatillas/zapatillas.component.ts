import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaServices } from '../services/zapatilla.services';




@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers:[ // se declara esta propiedad para indicar los servicios que se utilizaran
        ZapatillaServices
    ]
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = 'zapatillas cargadas';
    public objZapatilla: Array<Zapatilla>;
    public arrMarcas: String[];
    public color: string;
    public mi_marca:string;

    constructor(
        private _zapatillaService:ZapatillaServices
    ) {
        this.color='red';
    }
    ngOnInit() {
        this.objZapatilla=this._zapatillaService.getArrZapatillas();
        this.getMarcas();
        
    }
    getMarcas() {
        this.arrMarcas = new Array();
        this.objZapatilla.forEach((item, index) => {
            if (this.arrMarcas.indexOf(item.marca)<0) {
                this.arrMarcas.push(item.marca);
            }
        });
        console.log(this.arrMarcas);
    }
    addMarca(){
        this.arrMarcas.push(this.mi_marca);
        alert(this.mi_marca+" Agregado"); 
    }
    borrarMarca(index){
        /* splice borra elemento con el indice seleccionado (121,1) 
        se debe seleccionar el volumen de elemento a borrar */
        this.arrMarcas.splice(index,1);
    }



}// fn de component
