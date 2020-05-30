// arhchivo de confirguaacion para tranajar con peticiones AJAX
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { setClassMetadata } from '@angular/core/src/r3_symbols';


@Injectable()
export class PeticionesServices {

    public url:string;

    constructor(
        private http: HttpClient) 
        { 
            this.url='https://reqres.in/';
        }
        //  para consumir datos usando un get
        getUser(idUsuario):Observable<any>{
            return  this.http.get(this.url+'api/users/'+idUsuario);
        }

        // codigo para enviar datos por Post
        addUsers(user):Observable<any>{
            let params=JSON.stringify(user);
            let headers=new HttpHeaders().set('content-type','aplication/json');
            return this.http.post(this.url+'api/users',params,{headers:headers});
        }


} // fin de componente

