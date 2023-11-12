import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-viewport',
  standalone: true,
  template: '<p>Viewport Component</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewportComponent {
  constructor() {
    console.log('ViewportComponent loaded');
  }
}