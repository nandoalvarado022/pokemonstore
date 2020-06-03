import { Route, Router, ActivatedRoute } from '@angular/router'
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
    pokemones = [];
    pokemonesFiltrados;
    
    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.getPokemones().subscribe(
            (data: any) => {
                const pokemones = data.pokemon_species;
                pokemones.map(pokemon => {
                    this.pokemonService.getDetalle(pokemon.name).subscribe(
                        (pokemon: any) => {
                            debugger
                            this.pokemones.push(pokemon);
                        }
                    )
                })
            },
            err => console.log(err)
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

    filtrarPokemones(){
        // this.pokemonesFiltrados = this.pokemones.filter;
    }

    
}