import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { Player } from 'src/app/shared/player/player.model';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css'],
})
export class StatsDisplayComponent implements OnInit {
  
  playerStats: Player | null;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getPlayerStats().subscribe((stats) => {
      this.playerStats = stats;
    });

    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 300,
      reset: true,
    });

    sr.reveal('.stats-display', { delay: 200, origin: 'left' });
  }
}
