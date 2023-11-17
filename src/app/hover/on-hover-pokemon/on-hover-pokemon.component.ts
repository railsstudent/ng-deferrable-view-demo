import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getPokemonFn } from '../pokemon-image.util';

@Component({
  selector: 'app-on-hover-pokemon',
  standalone: true,
  imports: [AsyncPipe],
  template: '<img [src]="image$ | async" alt="pokemon image" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnHoverPokemonComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  getPokemon = getPokemonFn();
  image$!: Observable<string>;

  ngOnInit() {
    this.image$ = this.getPokemon(this.id);
  }
}