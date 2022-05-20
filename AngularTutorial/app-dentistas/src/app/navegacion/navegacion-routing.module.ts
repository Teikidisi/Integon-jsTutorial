import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VuelosComponent } from '../aerolinea/vuelos/vuelos.component';
import { DetallepersonasComponent } from '../detallepersonas/detallepersonas.component';
import { InfoPersonaComponent } from '../info-persona/info-persona.component';
import { DemoutileriasComponent } from '../utilerias/demoutilerias/demoutilerias.component';

const routes: Routes = [
  {path: 'vuelos', component: VuelosComponent},
  {path: 'demoutilerias', component: DemoutileriasComponent},
  {path: 'personas', component: InfoPersonaComponent},
  {path: 'personas/detallepersonas/:id', component: DetallepersonasComponent},
  {path: '**',redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacionRoutingModule { }
