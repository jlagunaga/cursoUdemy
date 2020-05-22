import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificarse:boolean;
  constructor() { 
    this.identificarse=false;
  }

  ngOnInit(): void {
  }

  setIdentificarse(){
    this.identificarse=true;
  }
  desIdentificarse(){
    this.identificarse=false;
  }

}
