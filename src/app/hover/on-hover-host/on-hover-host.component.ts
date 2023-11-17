import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnHoverPokemonComponent } from '../on-hover-pokemon/on-hover-pokemon.component';

@Component({
  selector: 'app-on-hover-host',
  standalone: true,
  imports: [OnHoverPokemonComponent],
  template: `
    <div>
      @defer (on hover) {
        <app-on-hover-pokemon id="25" />
      } @loading (minimum 800ms) {
        <p>Loading Pikachu....</p>
      } @placeholder (minimum 500ms) {
        <p>Hover me to show Pikachu</p>
      } @error {
        <p>Error loading the component</p>
      }
    </div>

    <div>
      @defer (on hover) {
        <app-on-hover-pokemon id="52" />
      } @loading (minimum 800ms) {
        <p>Loading Meowth....</p>
      } @placeholder (minimum 500ms) {
        <p>Hover me to show Meowth</p>
      } @error {
        <p>Error loading the component</p>
      }
    </div>
  `,
  styles: [`
    div {
      padding: 0.25rem;
      border: 1px solid black; 
      margin-bottom: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnHoverHostComponent {}