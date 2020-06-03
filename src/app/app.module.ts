import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { PokemonService } from './services/pokemon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DeseadosComponent } from './components/deseados/deseados.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
    declarations: [
        AppComponent,
        ListadoComponent,
        CrearComponent,
        NavegacionComponent,
        CarritoComponent,
        DetalleComponent,
        DeseadosComponent,
        BuscadorComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [PokemonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
