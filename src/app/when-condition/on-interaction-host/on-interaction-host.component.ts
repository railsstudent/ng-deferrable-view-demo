import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LargeComponent } from '../large-component/large-component.component';

@Component({
  selector: 'app-on-interaction-host',
  standalone: true,
  imports: [LargeComponent],
  template: `
    <p class="interaction" #instruction>Load component on interaction</p>
    @defer (on interaction(instruction)) {
      <app-large-component text='Large Component on interaction' />
    } @loading (minimum 300ms) {
      <p>Loading....</p>
    } @placeholder (minimum 500ms) {
      <p>Placeholder of large component on interaction</p>
    } @error {
      <p>Error loading the component</p>
    }
  `,
  styles: [`
    p.interaction {
      border: 1px solid black;
      padding: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnInteractionHostComponent {}
