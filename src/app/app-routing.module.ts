import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { ExoticosComponent } from './componentes/exoticos/exoticos.component';
import { GreenpeaceComponent } from './componentes/greenpeace/greenpeace.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MedicinasComponent } from './componentes/medicinas/medicinas.component';
import { MedioAmbienteComponent } from './componentes/medio-ambiente/medio-ambiente.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SedesComponent } from './componentes/sedes/sedes.component';

const routes: Routes = [
  {
    path:"inicio", component:InicioComponent
  },
  {
    path:"especies", component:EspeciesComponent
  },
  {
    path:"exoticos", component:ExoticosComponent
  },
  {
    path:"greenpeace", component:GreenpeaceComponent
  },
  {
    path:"medio-ambiente", component:MedioAmbienteComponent
  },
  {
    path:"medicinas", component:MedicinasComponent
  },
  {
    path:"productos", component:ProductosComponent
  },
  {
    path:"sedes", component:SedesComponent
  },
  {
    path:"nosotros", component:NosotrosComponent
  },
  {
    path:"contacto", component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
