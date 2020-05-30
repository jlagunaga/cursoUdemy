'use strict'

// plantillas de texto

var nombre=prompt("Ingrese Nombre:");
var apellios=prompt("Ingrese Apellidos:");

 /* 
 uso de plantillas se utiliza el simbolo " ` ` "
 el simobolo "${}" para escapar del string a javaScript 
 */
var texto=`
<h1>Bienvenido </h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mi Apellido es: ${apellios}</h3>
`;

document.write(texto);
