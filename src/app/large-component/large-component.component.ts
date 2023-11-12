import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-component',
  standalone: true,
  template: '<p>{{ text  }}</p>',
})
export class LargeComponent {

  @Input({ required: true })
  text = '';
}