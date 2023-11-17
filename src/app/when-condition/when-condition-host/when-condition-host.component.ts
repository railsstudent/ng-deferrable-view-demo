import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LargeComponent } from '../large-component/large-component.component';

@Component({
  selector: 'app-when-condition-host',
  standalone: true,
  imports: [LargeComponent],
  template: `
    <div class="button-container">
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
  `,
  styles: [`
    div.button-container {
      margin-bottom: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhenConditionHostComponent {
  isLoad = false;
}