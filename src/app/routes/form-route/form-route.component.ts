import { Component } from '@angular/core';
import { FormComponent } from '@components';

@Component({
  selector: 'app-form-route',
  standalone: true,
  imports: [FormComponent],
  template: `
    <section class="flex flex-col items-center justify-center mt-6">
      <app-form />
    </section>
  `,
})
export class FormRouteComponent {}
