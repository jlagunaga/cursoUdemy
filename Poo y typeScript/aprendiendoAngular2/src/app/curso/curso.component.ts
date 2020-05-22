import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public nombre:string;
  public folowers:number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
      this.folowers=params.folowers;
      console.log(this.nombre);
    });
  }
  mover_videojuegos(){
    this._router.navigate(['/videojuego']);
  }

}// fin de componente
