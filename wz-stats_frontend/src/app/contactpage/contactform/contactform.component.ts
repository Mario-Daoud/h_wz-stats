import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.contactForm.invalid) {
      return;
    }

    // Form submission logic here
    console.log('Form submitted!');
    console.log('Name:', this.contactForm.value.name);
    console.log('Email:', this.contactForm.value.email);
    console.log('Message:', this.contactForm.value.message);

    // Reset the form fields and state
    this.contactForm.reset();
  }
}
