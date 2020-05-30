import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public titulo: String;
  public subtitulo: string;
  public web: string;

  constructor() {
    this.titulo = 'Joseph Laguna  ';
    this.subtitulo = 'Desarrollador';
    this.web = 'www.JosephLaguna@johas.com.pe';

  }
  ngOnInit(): void {
  }

}// fin de clase
