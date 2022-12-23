import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public setAllPokemons: any;
  private getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe( //get não precisa passar valor como param
      res => {
        this.setAllPokemons = res.results;                     //valor armazenado
        this.getAllPokemons = res.setAllPokemons;    
      },
      error => {
        this.apiError = true;
      }
    );  
  }
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter(( res: any ) => {          //filtro do valor arm
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;         //vai apagar ele mesmo e mantendo os valores dele digitado

  }

}
