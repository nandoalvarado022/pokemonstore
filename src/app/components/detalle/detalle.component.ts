import { Route, Router, ActivatedRoute } from '@angular/router'
import { PokemonService } from './../../services/pokemon.service'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

    constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private router: Router) { }
    detallePokemon: any;
    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        this.verDetalle(params);
    }

    verDetalle(data) {
        this.pokemonService.getDetalle(data.id).subscribe(
            (data: any) => {
                this.detallePokemon = data
                console.log(data);
            }
        )
    }

    saveCarritoPokemon(pokemon){
        this.pokemonService.saveCarritoPokemon(pokemon);
        alert('El pokemon se ha agregado a tu carrito de compras')
    }

    saveDeseadosPokemon(pokemon){
        this.pokemonService.saveDeseadosPokemon(pokemon);
        alert('El pokemon se ha agregado a tu lista de deseados')
    }
}
