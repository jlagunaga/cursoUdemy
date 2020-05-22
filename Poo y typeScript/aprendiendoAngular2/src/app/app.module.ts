import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ruting,appRutingProvider } from './app.ruting'; // importamos el archivo con las rutas
import { HttpClientModule } from '@angular/common/http'; // para utilizar peticiones HTTP 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {videoJuegosComponent} from  './videojuego/videojuego.componments'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { ExternoComponent } from './externo/externo.component';

// pipes
import { CalculadoraPipes } from './pipes/calculadora.pipes';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    videoJuegosComponent,
    ZapatillasComponent,
    HomeComponent,
    CursoComponent,
    ExternoComponent,
    CalculadoraPipes,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ruting,
    HttpClientModule
  ],
  providers: [appRutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
