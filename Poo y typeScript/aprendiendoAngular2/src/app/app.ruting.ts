// importar los modulos de angular 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes para definir el alias
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { videoJuegosComponent } from './videojuego/videojuego.componments';
import { CursoComponent } from './curso/curso.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


// array de rutas
const appRutes: Routes = [
    {path:'', component:HomeComponent},    
    {path:'home', component:HomeComponent},
    {path:'zapatillas',component:ZapatillasComponent},
    {path: 'videojuego',component:videoJuegosComponent},
    {path: 'curso',component:CursoComponent},
    {path: 'curso/:nombre',component:CursoComponent},// path opcional para pasar parametros por get
    {path: 'curso/:nombre/:folowers',component:CursoComponent},
    {path: 'externos',component:ExternoComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: '**',component:HomeComponent}, // ruta 404 se carga cuando el alias indicado no esta definido o no se encuentra
    
];

// exportar  el modulo tuter
export const appRutingProvider: any[]=[];
export const Ruting:ModuleWithProviders=RouterModule.forRoot(appRutes);

