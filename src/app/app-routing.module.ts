import { DeseadosComponent } from './components/deseados/deseados.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListadoComponent } from './components/listado/listado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/listado',
        pathMatch: 'full'
    },
    {
        path: 'listado',
        component: ListadoComponent
    },
    {
        path: 'crear',
        component: CrearComponent
    },
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleComponent
    },
    {
        path: 'deseados',
        component: DeseadosComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
