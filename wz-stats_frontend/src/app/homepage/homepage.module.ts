import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

@NgModule({
  declarations: [LandingpageComponent, AboutpageComponent],
  imports: [CommonModule],
  exports: [LandingpageComponent, AboutpageComponent],
})
export class HomepageModule {}
