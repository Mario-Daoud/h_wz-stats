import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StatspageComponent } from './statspage/statspage.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent, StatspageComponent],
  imports: [CommonModule, CoreModule, FormsModule],
  exports: [StatspageComponent],
})
export class StatspageModule {}
