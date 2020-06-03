import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
    pokemones_comprar = [];
    constructor() { }

    ngOnInit(): void {
        this.cargar_pokemones();
    }

    cargar_pokemones(){
        this.pokemones_comprar = JSON.parse(localStorage.getItem('pokemones-carrito'));
    }

    eliminar(index){
        this.pokemones_comprar.splice(index, 1);
        localStorage.setItem('pokemones-carrito', JSON.stringify(this.pokemones_comprar));
    }
}
