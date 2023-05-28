import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/common/common.service';
import { Player } from 'src/app/shared/player/player.model';

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
  }
}
