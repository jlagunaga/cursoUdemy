'use strict'

var fechas= new Date();

var año=fechas.getFullYear();
var mes=fechas.getMonth();
var dia=fechas.getDay();
var hora=fechas.getHours();
var texto_fechas=`
    Año: ${año}
    Mes: ${mes}
    Dia: ${dia}
    Hora: ${hora}
`;

console.log(texto_fechas);


