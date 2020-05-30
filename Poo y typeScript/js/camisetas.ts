// interfaces = contrato con la clase, debe incluir todas las clases indicadas
interface camisetaBase{
    setColor(color);
    getColor();
}


/*  Clase (Modelo del objeto) --- el nombre de la clase debe ser igual 
 mayuscula la primera letra  a el nombre del archivo
 */

// Decorador 
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion= function():void{
            console.log('Camiseta estampada con el logo de: '+ logo);
        }
    }
}


@estampar('Guchi')
class Camisetas implements camisetaBase{
    // propiedades (Caracteristicas de objetos)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: string;

    // Metodos (funciones o acciones del objeto)

    constructor(color,modelo,marca,talla,precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;
    }

    public setColor(color: string) {
        this.color = color;
    };

    public getColor() {
        return this.color;
    };
    public setModelo(modelo: string) {
        this.modelo = modelo;
    };

    public getModelo() {
        return this.modelo;
    };


}// fin de clase

var camiset = new Camisetas('Azul','largo','diadora','Mediano','40.00');
camiset.setColor("Amarillo");
camiset.setModelo('cuello V');

console.log(camiset);


// clase hija 
class Polera extends Camisetas{
    private capucha:boolean;

    getCapucha(){
        return this.capucha;
    }
    setCapucha(capucha:boolean ){
        this.capucha=capucha;
    }
}// fin de clase 

var polera_Forever= new Polera('rojo','manga larga','Diadora','Largo','200');
polera_Forever.setCapucha(false);

camiset.estampacion();

console.log(polera_Forever);


