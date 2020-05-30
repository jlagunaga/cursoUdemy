import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaServices {

    public arr_zapatilla: Array<Zapatilla>;
    constructor() {
        this.arr_zapatilla = [
            new Zapatilla('deporFree', 'Reebok', 'Azul', 120, true),
            new Zapatilla('streetMax', 'Adiddas', 'Red', 90, true),
            new Zapatilla('urban', 'allStar', 'black', 150, false),
            new Zapatilla('classic', 'allStar', 'white', 110, true)
        ];
    }

    getArrZapatillas():Array<Zapatilla>{
        return this.arr_zapatilla;
    }

}// fin de component
