import { Route, Router, ActivatedRoute } from '@angular/router'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navegacion',
    templateUrl: './navegacion.component.html',
    styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
    strPokemonBuscado = '';
    myGroup: FormGroup;
    constructor(private router: Router, private pokemonService: PokemonService) { }

    ngOnInit(): void {
        this.myGroup = new FormGroup({
            strPokemonBuscado: new FormControl()
        })
    }

    public buscarPokemon(e) {
        const strPokemonBuscado = this.myGroup.value.strPokemonBuscado.toLowerCase();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([`detalle/${strPokemonBuscado}`]));
        this.pokemonService.getDetalle(strPokemonBuscado).subscribe(
            (data: any) => {
                console.log(data);
            },
            err => console.log(err)
        )
    }
}
