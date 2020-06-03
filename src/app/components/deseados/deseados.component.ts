import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deseados',
    templateUrl: './deseados.component.html',
    styleUrls: ['./deseados.component.scss']
})
export class DeseadosComponent implements OnInit {

    pokemones_deseados = [];
    constructor() { }

    ngOnInit(): void {
        this.cargar_pokemones();
    }

    cargar_pokemones() {
        this.pokemones_deseados = JSON.parse(localStorage.getItem('pokemones-deseados'));
    }

    eliminar(index) {
        this.pokemones_deseados.splice(index, 1);
        localStorage.setItem('pokemones-deseados', JSON.stringify(this.pokemones_deseados));
    }

}
