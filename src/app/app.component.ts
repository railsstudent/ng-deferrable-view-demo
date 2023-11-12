import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LargeComponent } from './large-component/large-component.component';
import { ViewportHostComponent } from './viewport-host/viewport-host.component';

const N = 75;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LargeComponent, ViewportHostComponent],
  template: `
    <div class="container">
      <h1>Hello from {{ name }}!</h1>
      <div style='margin-bottom: 1rem;'>
        <button (click)="isLoad = true">Load</button>
      </div>
      @defer (when isLoad === true) {
        <app-large-component text="Large Component on isLoad = true" />
      } @loading (minimum 300ms) {
        <p>Loading....</p>
      } @placeholder (minimum 500ms) {
        <p>Placeholder of large component on load</p>
      } @error {
        <p>Error loading the component</p>
      }
      <p #instruction style="border: 1px solid black; padding: 1rem;">Load component on interaction</p>
      @defer (on interaction(instruction)) {
        <app-large-component text='Large Component on interaction' />
      } @loading (minimum 300ms) {
        <p>Loading....</p>
      } @placeholder (minimum 500ms) {
        <p>Placeholder of large component on interaction</p>
      } @error {
        <p>Error loading the component</p>
      }
      <ul>
      @for (item of items; track item) {
        <li>{{ item }}</li>
      }
      </ul>
      <app-viewport-host />
    </div>
  `,
  styles: [`
    div.container {
      padding: 1rem;
    }

    li {
      margin-left: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Deferred View';
  isLoad = false;
  items = [ ...Array(N).keys() ].map( i => i+1);
}
