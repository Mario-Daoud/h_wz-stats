import { Injectable, OnInit } from '@angular/core';
import { Player } from '../player/player.model';

@Injectable()
export class CommonService implements OnInit {
  playerStats: Player;

  constructor() {}

  ngOnInit(): void {
    this.playerStats = null;
  }

  setPlayerStats(playerStats: Player) {
    this.playerStats = playerStats;
  }

  getPlayerStats(): Player {
    return this.playerStats;
  }
}
