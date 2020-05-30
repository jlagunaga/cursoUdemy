import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRutingProvider,Ruting } from './app.ruting';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ErrorComponent } from './components/error/error.component';
import { ProyectComponent } from './components/proyect/proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    CreateComponent,
    DetailsComponent,
    EditProjectComponent,
    ErrorComponent,
    ProyectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ruting
  ],
  providers: [appRutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
