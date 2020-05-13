'use strict'
var div_usuarios;
var div_janet;
var div_profesor;

/* Fecth (ajax) y peticiones  a servicios / apis rest 
    peticiones asincronas que esperan que que se ejecuten en secuncia
*/

window.addEventListener("load", () => {
    var usuarios = [];
    div_usuarios = document.querySelector("#usuarios");
    div_janet = document.querySelector("#Janet");
    div_profesor = document.querySelector("#profesor");


    get_AllUsuarios()
        .then(data => data.json()) // cuando se reciban los datos se convierten a json "()=>"" callback con return
        .then(uss => { //  se camptura los datos ya formateados y se trabaja
            listarUsuarios(uss.data);
            return getInfo();
        })
        .then(data => {
            div_profesor.innerHTML=data;
            console.log(data);
            return get_Janet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data)
        }).catch(error=>{
            console.log(error+"  en promesa");
        });

}); // fin de load 


// ********** funciones **************
function listarUsuarios(usuarios) {
    usuarios.map((use, i) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = i + ". " + use.first_name + " " + use.last_name;
        div_usuarios.append(nombre);
        document.querySelector(".loading").style.display = "none";
    });
};


function get_AllUsuarios() {
    return fetch("https://reqres.in/api/users"); // accede a datos remotos
}

function get_Janet() {
    return fetch("https://reqres.in/api/users/2"); // accede a datos remotos
}

function mostrarJanet(usuario) {
    console.log(usuario);
    var nombre = document.createElement("h5");
    var avatar = document.createElement("img");
    nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
    avatar.src = usuario.avatar;
    avatar.width = "100"
    avatar.height = "100"
    div_janet.append(nombre);
    div_janet.append(avatar);
    document.querySelector("#Janet .loading").style.display = "none";
};


/* 
 ******************* Crear Promes ***************
 */

function getInfo() {
    var profesonJson = {
        nombre: "Victor",
        apellido: "Robles",
        url: "http://victorrobles.es"
    };
    // devolvemos promesa
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var profesor_string = JSON.stringify(profesonJson);
            if (typeof profesor_string != "string" || profesor_string == "") return reject("Error");
            return resolve(profesor_string);
        }, 3000);
    });
}