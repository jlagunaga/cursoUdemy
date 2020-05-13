'use strict'

window.addEventListener("load",function(){

var formaulario=document.querySelector("#formulario");
var box_dashed=document.querySelector(".dashed");
box_dashed.style.display="none";

formaulario.addEventListener("submit",function(){
    var nombre=document.querySelector("#nombre").value;
    var apellido=document.querySelector("#apellido").value;
    var edad=parseInt(document.querySelector("#edad").value);

    if(nombre.trim()==null || nombre.trim()==0){
        //alert("el nmbre es invalido");
        document.querySelector("#errNombre").innerHTML="Nombre Invalido";
        return false
    }else{
        document.querySelector("#errNombre").style.display="none"
    }

    if(apellido.trim()==null || apellido.trim()==0){
        //alert("el apellido es invalido");
        document.querySelector("#errApellido").innerHTML="Apellido Invalido";
        return false
    }else{document.querySelector("#errApellido").style.display="none"}
    // trim() no se usa en campo numerico
    if(edad==null || edad<=0 || isNaN(edad)){
        //alert("la edad no es invalida");
        document.querySelector("#errEdad").innerHTML="Edad Invalido";
        return false
    }else{document.querySelector("#errEdad").style.display="none"}


    box_dashed.style.display="block"

    var parrNombre=document.querySelector("#parrafoNombre");
    var parrApellido=document.querySelector("#parrafoApellido");
    var parrEdad=document.querySelector("#parrafoEdad");

    parrNombre.append(nombre);
    parrApellido.append(apellido);
    parrEdad.append(edad);

});


});