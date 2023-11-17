import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { map } from "rxjs";
import { Pokemon } from "./pokemon.interface";

export function getPokemonFn() {
  const httpClient = inject(HttpClient);

  return (id: number) => 
    httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .pipe(
        map(({ sprites }) => sprites.front_shiny)
    );
}
