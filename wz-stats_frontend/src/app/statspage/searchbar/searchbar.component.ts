import { Component } from '@angular/core';
import { PlayerService } from 'src/app/core/service/player.service';
import { Player } from 'src/app/shared/player/player.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  playerName: string;
  playerStats: Player;

  constructor(private playerService: PlayerService) {}

  getPlayerStats(): void {
    const name = this.playerName.split('#')[0];
    const tag = this.playerName.split('#')[1];
    const platform = 'Activision'; // Replace 'platform-name' with the desired platform
    this.playerService
      .getPlayerStats(name, tag, platform)
      .subscribe((playerStats) => (this.playerStats = playerStats));
  }
}
