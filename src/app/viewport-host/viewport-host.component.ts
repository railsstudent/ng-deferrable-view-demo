import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewportComponent } from '../viewport/viewport.component';

const N = 75;

@Component({
  selector: 'app-viewport-host',
  standalone: true,
  imports: [ViewportComponent],
  template: `
    <ul>
      @for (item of items; track item) {
        <li>{{ item }}</li>
      }
    </ul>
    <p #bottom>At the bottom of the page</p>
    @defer (on viewport(bottom)) {
      <app-viewport />
    } @loading (after 500ms; minimum 100ms) {
      <p>Loading....</p>
    } @placeholder (minimum 500ms) {
      <p>Placeholder of viewport component</p>
    } @error {
      <p>Error loading the component</p>
    }
  `,
  styles: [`
    li {
      margin-left: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewportHostComponent {
  items = [ ...Array(N).keys() ].map( i => i + 1);
}
