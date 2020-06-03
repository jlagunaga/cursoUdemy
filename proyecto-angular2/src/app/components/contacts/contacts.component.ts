import { Component, OnInit, ViewChild } from '@angular/core';

declare var $:any; /* declara la variable de Jquery para que angular no muestre error  */

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

public largo:number;
public largonEnviar:any;
public autor:any;

@ViewChild('Viewchild',{static:true})child;//  view child se usa para rescatar los valores del html / se debe importar la dependencia 

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.child.nativeElement.textContent);

  }

enviarLargo(){
  
  this.largo!=null? this.largonEnviar=this.largo: this.largonEnviar=null;
}

resetearValor(){
  this.largonEnviar=null;
}
recojerObjeto(event){
  this.autor=event;
  console.log(event); 
}


}// fin de clase 
