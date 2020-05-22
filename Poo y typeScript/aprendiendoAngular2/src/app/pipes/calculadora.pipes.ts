import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'calculadora'
})
export class CalculadoraPipes implements  PipeTransform{

    transform(value: any , value2:any){
        let operaciones=`
        Suma:${value*value2}
        Resta:${value-value2}
        Multiplicacion:${value*value2}
        Division:${value/value2}
        `
        return operaciones;
    };
}
