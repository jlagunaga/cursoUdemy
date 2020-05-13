'use strict'
var arr_pelis=[];//list_Storage para strage;

window.addEventListener("load", () => {
    var formulario = document.querySelector("#form1");

    val_array_storage("peliculas");

    formulario.addEventListener("submit", function () {
        var titulo = document.querySelector("#txtPelicula").value;
        ingresar_Storage("peliculas",titulo);
    });
    
    var ul=document.querySelector("#list");
    if(arr_pelis.length>=1){
        for(let indx in arr_pelis){
            var li=document.createElement("li");
            li.append(arr_pelis[indx]);
            ul.append(li);
        }
    }    

}); //  fin de windows load 


// eventos
function ingresar_Storage(nombre_Storage,nueva_peli){
    if (localStorage.getItem(nombre_Storage) != null) {
        console.log("Local storage existe");
        arr_pelis=JSON.parse(localStorage.getItem(nombre_Storage)); // recojemos  el array de local storage        
        localStorage.removeItem(nombre_Storage);// eliminamos el objet del local storage
        arr_pelis.push(nueva_peli);// agregamos el mism objeto al local storage
        localStorage.setItem(nombre_Storage,JSON.stringify(arr_pelis));

    }else{
        console.log("Local storage No existe");
        arr_pelis.push(nueva_peli);
        localStorage.setItem(nombre_Storage,JSON.stringify(arr_pelis));
    };
};

function val_array_storage(nombre_Storage){
    if (localStorage.getItem(nombre_Storage) != null) {
        arr_pelis=JSON.parse(localStorage.getItem(nombre_Storage));
    }
}

function cargar_lista(){

}


