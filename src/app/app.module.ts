import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { ExoticosComponent } from './componentes/exoticos/exoticos.component';
import { MedioAmbienteComponent } from './componentes/medio-ambiente/medio-ambiente.component';
import { GreenpeaceComponent } from './componentes/greenpeace/greenpeace.component';
import { MedicinasComponent } from './componentes/medicinas/medicinas.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SedesComponent } from './componentes/sedes/sedes.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuprincipalComponent,
    EspeciesComponent,
    ExoticosComponent,
    MedioAmbienteComponent,
    GreenpeaceComponent,
    MedicinasComponent,
    NosotrosComponent,
    ContactoComponent,
    ProductosComponent,
    SedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
