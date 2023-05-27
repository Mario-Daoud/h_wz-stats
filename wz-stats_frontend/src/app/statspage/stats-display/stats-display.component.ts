import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { Player } from 'src/app/shared/player/player.model';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css'],
})
export class StatsDisplayComponent implements OnInit {
  playerStats: Player;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.playerStats = null;
  }

  displayPlayerStats(): void {
    this.playerStats = this.commonService.getPlayerStats();
    console.log('player stats: ', this.playerStats);
  }
}
