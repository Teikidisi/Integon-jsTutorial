import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentOne } from './app.component';
import {Tercero, Cuarto} from './app.tercero'
import {Ejemplo} from './app.ejemplo';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';

import {UtileriasModule} from './utilerias/utilerias.module'
import {SharedModule} from './shared/shared.module'
import {AerolineaModule} from './aerolinea/aerolinea.module'
import {NavegacionModule} from './navegacion/navegacion.module'

import { RouterModule, Routes } from '@angular/router';
import { DetallepersonasComponent } from './detallepersonas/detallepersonas.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    Cuarto,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    DetallepersonasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavegacionModule,
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
