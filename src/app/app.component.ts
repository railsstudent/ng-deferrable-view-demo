import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewportHostComponent } from './viewport-host/viewport-host.component';
import { OnHoverHostComponent } from './hover/on-hover-host/on-hover-host.component';
import { OnInteractionHostComponent } from './when-condition/on-interaction-host/on-interaction-host.component';
import { WhenConditionHostComponent } from './when-condition/when-condition-host/when-condition-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ViewportHostComponent, 
    OnHoverHostComponent, WhenConditionHostComponent,
    OnInteractionHostComponent],
  template: `
    <div class="container">
      <h1>Hello from {{ name }}!</h1>
      <app-when-condition-host />
      <app-on-interaction-host />
      <app-on-hover-host />
      <app-viewport-host />
    </div>
  `,
  styles: [`
    div.container {
      padding: 1rem;
    }

    div.button-container {
      margin-bottom: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Deferred View';
}
