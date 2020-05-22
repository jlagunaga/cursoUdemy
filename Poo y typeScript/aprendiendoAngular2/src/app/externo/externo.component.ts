import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.servicio';


@Component({
  selector: 'app-experno',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {

  // variables
  public users: any;
  public idUser: any;
  public fecha;
  public newUsers: any;

  constructor(
    private _peticionesServices: PeticionesServices) {
    this.idUser = 1;
    this.fecha = new Date();
    this.newUsers = {
      "name": "prueba ",
      "job": "prueba job"
    }
  }// ***** Fin de constructor


  ngOnInit(): void {
    this.cargarusuario();
  } // *** fin de onInit

  public cargarusuario() {
    this.users = false;
    /* se suscribe el servicio con la respuesta y se etraen los datos del api */
    this._peticionesServices.getUser(this.idUser).subscribe(
      result => {
        this.users = result.data;
        console.log(this.users);
      }, error => {
        console.log(<any>error);
      });
  }

  onSubmit(form) {
    this._peticionesServices.addUsers(this.newUsers).subscribe(
      result => {
        console.log(result.name);
        form.reset();
      },
      error => {
        console.log(<any>error);
      });
  }



}// fin de clase
