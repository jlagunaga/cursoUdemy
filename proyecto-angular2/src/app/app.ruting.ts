//Modulos de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

// componenetes y rutas
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ErrorComponent } from './components/error/error.component';
import { ProyectComponent } from './components/proyect/proyect.component';


// array de rutas
const appRutes:Routes=[
{path:'about',component:AboutComponent},
{path:'Contacts',component:ContactsComponent},
{path:'createProject',component:CreateComponent},
{path:'detailsProject/:id',component:DetailsComponent},
{path:'editProject/:id',component:EditProjectComponent},
{path:'error',component:ErrorComponent},
{path:'Project',component:ProyectComponent}
];

// exportar el modulo router

export const appRutingProvider:any[]=[];
export const Ruting:ModuleWithProviders=RouterModule.forRoot(appRutes)
