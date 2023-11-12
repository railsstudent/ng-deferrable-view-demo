import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewportComponent } from '../viewport/viewport.component';

@Component({
  selector: 'app-viewport-host',
  standalone: true,
  imports: [ViewportComponent],
  template: `
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewportHostComponent {}
