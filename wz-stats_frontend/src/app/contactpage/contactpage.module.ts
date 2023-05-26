import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from './contactform/contactform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactformComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactpageModule {}
