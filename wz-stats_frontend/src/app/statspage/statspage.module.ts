import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StatspageComponent } from './statspage/statspage.component';

@NgModule({
  declarations: [SearchbarComponent, StatspageComponent],
  imports: [CommonModule],
  exports: [StatspageComponent],
})
export class StatspageModule {}
