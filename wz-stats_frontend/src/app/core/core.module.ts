import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './service/player.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PlayerService],
})
export class CoreModule {}
