import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="personForm"
      (submit)="submit($event)"
      class="flex flex-col gap-5"
    >
      <input
        type="text"
        placeholder="First Name"
        formControlName="firstName"
        class="{{
          isInvalid('firstName') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <input
        type="text"
        placeholder="Last Name"
        formControlName="lastName"
        class="{{
          isInvalid('lastName') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <input
        type="email"
        placeholder="Email"
        formControlName="email"
        class="{{
          isInvalid('email') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);

  personForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  isInvalid = (controlName: string) =>
    this.personForm.get(controlName)?.invalid &&
    (this.personForm.get(controlName)?.touched ||
      this.personForm.get(controlName)?.dirty);

  submit = (event: Event) => {
    event.preventDefault();
    if (this.personForm.invalid) return;

    this.personForm.reset();
  };
}
