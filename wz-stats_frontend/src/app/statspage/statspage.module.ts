import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { StatsDisplayComponent } from './stats-display/stats-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchbarComponent, StatsDisplayComponent],
  imports: [CommonModule, CoreModule, FormsModule, SharedModule],
  exports: [SearchbarComponent, StatsDisplayComponent],
})
export class StatspageModule {}
