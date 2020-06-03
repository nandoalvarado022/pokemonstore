import { Pokemon } from './../models/pokemon';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	pokemones = [];
	API_URL = 'https://pokeapi.co/api/v2';
	url = ''

	constructor(private http: HttpClient) { }

	getPokemones(id?: string) {
		if(id) this.url = `${this.API_URL}/generation/1/${id}`;
		else this.url = `${this.API_URL}/generation/1/`;
		return this.http.get(this.url);
	}

	saveDeseoPokemon(pokemon: Pokemon){
		let pokemones = JSON.parse(localStorage.getItem('pokemones-deseo'));
	}

	saveCarritoPokemon(pokemon: Pokemon){   
        if(localStorage.getItem('pokemones-carrito') == null) localStorage.setItem('pokemones-carrito', '[]')
        let pokemones = JSON.parse(localStorage.getItem('pokemones-carrito'));
        let data = pokemones.push(pokemon);
        localStorage.setItem('pokemones-carrito', JSON.stringify(pokemones));
    }

    saveDeseadosPokemon(pokemon: Pokemon){   
        if(localStorage.getItem('pokemones-deseados') == null) localStorage.setItem('pokemones-deseados', '[]')
        let pokemones = JSON.parse(localStorage.getItem('pokemones-deseados'));
        let data = pokemones.push(pokemon);
        localStorage.setItem('pokemones-deseados', JSON.stringify(pokemones));
    }
    
    getDetalle(pokemon: string){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }
}
