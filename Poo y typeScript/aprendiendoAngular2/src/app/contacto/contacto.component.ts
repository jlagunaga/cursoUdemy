import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public objeContactoUsuario:ContactoUsuario;

  constructor() { 
    this.objeContactoUsuario=new ContactoUsuario('','','','');

  }

  ngOnInit(): void {
  }

  onSubmit(form){
    form.reset();
    console.log(this.objeContactoUsuario);
  }
}
