import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, CoreModule, FormsModule],
  exports: [SearchbarComponent],
})
export class StatspageModule {
  
}
