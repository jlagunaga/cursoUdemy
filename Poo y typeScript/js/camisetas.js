var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  Clase (Modelo del objeto) --- el nombre de la clase debe ser igual
 mayuscula la primera letra  a el nombre del archivo
 */
// Decorador 
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo);
        };
    };
}
var Camisetas = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    function Camisetas(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    ;
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    ;
    Camisetas.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    ;
    Camisetas.prototype.getModelo = function () {
        return this.modelo;
    };
    ;
    Camisetas = __decorate([
        estampar('Guchi')
    ], Camisetas);
    return Camisetas;
}()); // fin de clase
var camiset = new Camisetas('Azul', 'largo', 'diadora', 'Mediano', '40.00');
camiset.setColor("Amarillo");
camiset.setModelo('cuello V');
console.log(camiset);
// clase hija 
var Polera = /** @class */ (function (_super) {
    __extends(Polera, _super);
    function Polera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polera.prototype.getCapucha = function () {
        return this.capucha;
    };
    Polera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    return Polera;
}(Camisetas)); // fin de clase 
var polera_Forever = new Polera('rojo', 'manga larga', 'Diadora', 'Largo', '200');
polera_Forever.setCapucha(false);
camiset.estampacion();
console.log(polera_Forever);
